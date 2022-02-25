import { ELanguages, Generator, HAREntry } from '../types';
import { getMimeType } from './utils';

function parseRawData(text: string, indent: string): string {
  return `${indent}payload := strings.NewReader(\`${text}\`)`;
}

// TODO: proper typing
function parseURLEncoded(params: { name: string; value: string }[], indent: string): string {
  let urlencodedSnippet = `${indent}data := url.Values{}\n`;

  urlencodedSnippet += params
    .map((param) => `${indent}data.Set("${param.name}", "${param.value}")`)
    .join(`\n`);

  urlencodedSnippet += '\n';
  urlencodedSnippet += `${indent}payload := strings.NewReader(data.Encode())`;

  return urlencodedSnippet;
}

// TODO: proper typing
function parseFormData(params: { name: string; value: string }[], indent: string): string {
  let formDataSnippet = `${indent}payload := &bytes.Buffer{}\n`;
  formDataSnippet += `${indent}writer := multipart.NewWriter(payload)\n`;

  formDataSnippet += params
    .map((param) => {
      const name = encodeURIComponent(param.name);
      const value = encodeURIComponent(param.value);
      return `${indent}_ = writer.WriteField("${name}", "${value}")`;
    })
    .join(`${indent}\n`);

  formDataSnippet += `${indent}err := writer.Close()`;
  formDataSnippet += `${indent}if err != nil {`;
  formDataSnippet += `${indent}${indent}fmt.Println(err)`;
  formDataSnippet += `${indent}${indent}return`;
  formDataSnippet += `${indent}}`;

  return formDataSnippet;
}

// TODO: proper typing
function getPostData(postData: any, indent: string): string {
  const mimeType = getMimeType(postData.mimeType);

  switch (mimeType) {
    case 'text/plain':
    case 'application/json':
      return parseRawData(postData.text, indent);
    case 'application/x-www-form-urlencoded':
      return parseURLEncoded(postData.params, indent);
    case 'multipart/form-data':
      return parseFormData(postData.params, indent);
    default:
      return '';
  }
}

// TODO: proper typing
function getHeaders(headers: { name: string; value: string }[], indent: string): string {
  const ignoredHeaders = new Set<string>(['host', 'method', 'path', 'scheme', 'version']);

  const sanetized = headers.map((header) => ({
    ...header,
    name: header.name.replace(/^:/, '')
  }));

  const filtered = sanetized.filter(({ name }) => !ignoredHeaders.has(name.toLowerCase()));

  return filtered
    .map((header) => `${indent}req.Header.Add("${header.name}", "${header.value}")`)
    .join(`${indent}\n`);
}

function getImports(indent: string, postData?: any): string {
  const mimeType = postData && getMimeType(postData.mimeType);

  let importSnippet = '';
  importSnippet += 'import (\n';
  importSnippet += `${indent}"fmt"\n`;
  importSnippet += `${indent}"net/http"\n`;

  if (mimeType === 'application/x-www-form-urlencoded') {
    importSnippet += `${indent}"net/url"\n`;
  }

  if (postData) {
    importSnippet += `${indent}"strings"\n`;
  }

  importSnippet += `${indent}"io/ioutil"\n`;
  importSnippet += ')\n\n';

  return importSnippet;
}

// TODO: maybe handle cookies?
// TODO: handle basic authentication?
// TODO: curl options: multi line, multiline char, quote type, long form options
function parse({ request }: HAREntry) {
  const indent = '  ';

  let snippet = 'package main\n\n';

  snippet += getImports(indent, request.postData);

  snippet += 'func main() {\n';
  snippet += `${indent}url := "${request.url}"\n`;
  snippet += `${indent}method := "${request.method}"\n\n`;

  if (request.postData) {
    snippet += getPostData(request.postData, indent);
    snippet += '\n\n';
    snippet += `${indent}req, err := http.NewRequest(method, url, payload)\n`;
  } else {
    snippet += `${indent}req, err := http.NewRequest(method, url, nil)\n`;
  }
  snippet += `${indent}if err != nil {\n${indent}${indent}fmt.Println(err)\n`;
  snippet += `${indent}${indent}return\n${indent}}\n\n`;

  if (request.headers.length) {
    snippet += getHeaders(request.headers, indent);
    snippet += '\n\n';
  }

  snippet += `${indent}client := &http.Client{}\n`;
  snippet += `${indent}res, err := client.Do(req)\n`;
  snippet += `${indent}if err != nil {\n${indent}${indent}fmt.Println(err)\n`;
  snippet += `${indent}${indent}return\n${indent}}\n`;
  snippet += `${indent}defer res.Body.Close()\n\n${indent}body, err := ioutil.ReadAll(res.Body)\n`;
  snippet += `${indent}if err != nil {\n${indent}${indent}fmt.Println(err)\n`;
  snippet += `${indent}${indent}return\n${indent}}\n\n`;
  snippet += `${indent}fmt.Println(string(body))\n}`;

  return snippet;
}

export default {
  displayName: 'Golang-HTTP',
  language: ELanguages.Golang,
  parse
} as Generator;

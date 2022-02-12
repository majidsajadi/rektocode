import { ELanguages, Generator, HAREntry } from "../types";
import { getMimeType } from "./utils";

// TODO: prettify text
function parseRawData(text: string): string {
  return `const body = JSON.stringify(${text});`;
}

// TODO: proper typing
function parseURLEncoded(
  params: { name: string; value: string }[],
  indent: string
): string {
  let urlencodedSnippet = "const body = new URLSearchParams();\n";

  urlencodedSnippet += params
    .map((param) => `body.append('${param.name}', '${param.value}');`)
    .join(`${indent}\n`);

  return urlencodedSnippet;
}

// TODO: proper typing
function parseFormData(
  params: { name: string; value: string }[],
  indent: string
): string {
  let formDataSnippet = "const body = new FormData();\n";

  formDataSnippet += params
    .map((param) => `body.append('${param.name}', '${param.value}');`)
    .join(`${indent}\n`);

  return formDataSnippet;
}

// TODO: proper typing
function getPostData(postData: any, indent: string): string {
  const mimeType = getMimeType(postData.mimeType);

  switch (mimeType) {
    case "text/plain":
    case "application/json":
      return parseRawData(postData.text);
    case "application/x-www-form-urlencoded":
      return parseURLEncoded(postData.params, indent);
    case "multipart/form-data":
      return parseFormData(postData.params, indent);
    default:
      return "";
  }
}

// TODO: proper typing
// TODO: handle forbidden header names: https://fetch.spec.whatwg.org/#forbidden-header-name
function getHeaders(
  headers: { name: string; value: string }[],
  indent: string
): string {
  const ignoredHeaders = new Set<string>([
    "host",
    "method",
    "path",
    "scheme",
    "version",
  ]);

  let headerSnippet = "const headers = new Headers();\n";

  const sanetized = headers.map((header) => ({
    ...header,
    name: header.name.replace(/^:/, ""),
  }));

  const filtered = sanetized.filter(
    ({ name }) => !ignoredHeaders.has(name.toLowerCase())
  );

  headerSnippet += filtered
    .map((header) => `headers.append('${header.name}', '${header.value}');`)
    .join(`${indent}\n`);

  return headerSnippet;
}

// TODO: handle cookies?
// TODO: handle basic authentication?
// TODO: fetch options: cors mode, credential, redirect, etc.
// TODO: options: indent, typescript?, es?
function parse({ request }: HAREntry) {
  const indent = "  ";
  let snippet = "";

  if (request.headers.length) {
    snippet += getHeaders(request.headers, indent);
    snippet += "\n\n";
  }

  if (request.postData) {
    snippet += getPostData(request.postData, indent);
    snippet += "\n\n";
  }

  snippet += `const options = {\n`;
  snippet += `${indent}method: '${request.method}',\n`;

  if (request.headers.length) {
    snippet += `${indent}headers,\n`;
  }

  if (request.postData) {
    snippet += `${indent}body,\n`;
  }

  snippet += "};\n\n";

  snippet += `const url = '${request.url}'\n\n`;

  snippet += `fetch(url, options);`;

  return snippet;
}

export default {
  displayName: "Fetch",
  language: ELanguages.JavaScript,
  parse,
} as Generator;

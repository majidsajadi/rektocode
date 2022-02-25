import { ELanguages, Generator, HAREntry } from '../types';
import { getMimeType } from './utils';

function pythonify(json: string) {
  return json.replaceAll('true', 'True').replaceAll('false', 'False').replaceAll('null', 'None');
}

// TODO: proper typing
// TODO: fix content type. requests doesnt work if content type header set to form-data for some reasone.
function parseFormData(params: { name: string; value: string }[], indent: string): string {
  let formDataSnippet = 'payload = {\n';

  formDataSnippet += params
    .map((param) => `${indent}'${param.name}': '${param.value}',`)
    .join(`\n`);

  formDataSnippet += '\n}';

  return formDataSnippet;
}

// TODO: proper typing
function getPostData(postData: any, indent: string): string {
  const mimeType = getMimeType(postData.mimeType);

  switch (mimeType) {
    case 'text/plain':
    case 'application/x-www-form-urlencoded':
      return `payload = '${postData.text}'`;
    case 'application/json':
      return `payload = json.dumps(${pythonify(postData.text)})`;
    case 'multipart/form-data':
      return parseFormData(postData.params, indent);
    default:
      return '';
  }
}

// TODO: proper typing
function getHeaders(headers: { name: string; value: string }[], indent: string): string {
  const ignoredHeaders = new Set<string>(['host', 'method', 'path', 'scheme', 'version']);

  let headerSnippet = 'headers = {\n';

  const sanetized = headers.map((header) => ({
    ...header,
    name: header.name.replace(/^:/, '')
  }));

  const filtered = sanetized.filter(({ name }) => !ignoredHeaders.has(name.toLowerCase()));

  headerSnippet += filtered
    .map((header) => `${indent}'${header.name}': '${header.value}',`)
    .join(`\n`);

  headerSnippet += '\n}';

  return headerSnippet;
}

// TODO: handle cookies?
// TODO: handle basic authentication?
// TODO: options: indent, quote
function parse({ request }: HAREntry) {
  const indent = '  ';
  const mimeType = request.postData && getMimeType(request.postData.mimeType);

  let snippet = 'import requests\n';
  if (mimeType === 'application/json') {
    snippet += 'import json\n';
  }

  snippet += '\n';

  snippet += `url = '${request.url}'\n`;
  snippet += `method = '${request.method}'\n\n`;

  if (request.headers.length) {
    snippet += getHeaders(request.headers, indent);
    snippet += '\n\n';
  }

  if (request.postData) {
    snippet += getPostData(request.postData, indent);
    snippet += '\n\n';
  }

  snippet += `response = requests.request(method, url, headers=headers`;

  if (request.postData) {
    snippet += ', data=payload';
  }

  snippet += ')';

  return snippet;
}

export default {
  displayName: 'Python-Requests',
  language: ELanguages.Python,
  parse
} as Generator;

import { ELanguages, Generator, HAREntry } from '../types';
import { escapeString, getMimeType } from './utils';

function parseRawData(text: string, indent: string): string {
  return `${indent}--data-raw${indent}${escapeString(text)}`;
}

// TODO: proper typing
function parseURLEncoded(params: { name: string; value: string }[], indent: string): string {
  return params
    .map((param) => `${indent}--data-urlencode '${param.name}=${param.value}'`)
    .join(`${indent}\\\n`);
}

// TODO: proper typing
function parseFormData(params: { name: string; value: string }[], indent: string): string {
  return params
    .map((param) => `${indent}--form '${param.name}=${param.value}'`)
    .join(`${indent}\\\n`);
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
    .map((header) => `${indent}-H '${header.name}: ${header.value}'`)
    .join(`${indent}\\\n`);
}

// TODO: maybe handle cookies?
// TODO: handle basic authentication?
// TODO: curl options: multi line, multiline char, quote type, long form options
function parse({ request }: HAREntry) {
  const indent = '  ';
  let snippet = 'curl';
  snippet += `${indent}-X ${request.method}`;
  snippet += `${indent}'${request.url}'${indent}\\\n`;

  if (request.headers.length) {
    snippet += getHeaders(request.headers, indent);
  }

  if (request.postData) {
    snippet += '\n';
    snippet += getPostData(request.postData, indent);
  }

  return snippet;
}

export default {
  displayName: 'Curl',
  language: ELanguages.Shell,
  parse
} as Generator;

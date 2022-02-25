import { ELanguages, Generator, HAREntry } from '../types';

// TODO: proper typing
function getHeaders(headers: { name: string; value: string }[]): string {
  const ignoredHeaders = new Set<string>(['host', 'method', 'path', 'scheme', 'version']);

  const sanetized = headers.map((header) => ({
    ...header,
    name: header.name.replace(/^:/, '')
  }));

  const filtered = sanetized.filter(({ name }) => !ignoredHeaders.has(name.toLowerCase()));

  return filtered
    .map((header) => `${header.name}: ${header.value}`)
    .join(`\n`) + '\n';
}

function getURL(raw: string): string {
  const url = new URL(raw);
  return url.pathname;
}

function parse({ request }: HAREntry) {
  const url = getURL(request.url)

  let snippet = `${request.method} ${url} ${request.httpVersion}\n`;

  if (request.headers.length) {
    snippet += getHeaders(request.headers);
  }

  snippet += "\n"

  if (request.postData?.text) {
    snippet += request.postData.text
  }

  return snippet;
}

export default {
  displayName: 'HTTP',
  language: ELanguages.Shell,
  parse
} as Generator;

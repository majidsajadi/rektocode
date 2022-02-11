import MIMEType from "whatwg-mimetype";
import { ELanguages, Generator, HAREntry } from "../types";

// https://github.com/ChromeDevTools/devtools-frontend/blob/805c1e9f351c42b9a0dbc07b328e9b441105aefe/front_end/panels/network/NetworkLogView.ts#L2093
function escapeString(str: string): string {
  function escapeCharacter(x: string): string {
    const code = x.charCodeAt(0);
    let hexString = code.toString(16);
    // Zero pad to four digits to comply with ANSI-C Quoting:
    // http://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
    while (hexString.length < 4) {
      hexString = "0" + hexString;
    }

    return "\\u" + hexString;
  }

  if (/[\0-\x1F\x7F-\x9F!]|\'/.test(str)) {
    // Use ANSI-C quoting syntax.
    return (
      "$'" +
      str
        .replace(/\\/g, "\\\\")
        .replace(/\'/g, "\\'")
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/[\0-\x1F\x7F-\x9F!]/g, escapeCharacter) +
      "'"
    );
  }
  // Use single quote syntax.
  return "'" + str + "'";
}

function parseRawData(text: string, indent: string): string {
  return `${indent}--data-raw${indent}${escapeString(text)}`;
}

// TODO: proper typing
function parseURLEncoded(
  params: { name: string; value: string }[],
  indent: string
): string {
  return params
    .map((param) => `${indent}--data-urlencode '${param.name}=${param.value}'`)
    .join(`${indent}\\\n`);
}

// TODO: proper typing
function parseFormData(
  params: { name: string; value: string }[],
  indent: string
): string {
  return params
    .map((param) => `${indent}--form '${param.name}=${param.value}'`)
    .join(`${indent}\\\n`);
}

// TODO: proper typing
function getPostData(postData: any, indent: string): string {
  const mimeType = new MIMEType(postData.mimeType).essence;

  switch (mimeType) {
    case "text/plain":
    case "application/json":
      return parseRawData(postData.text, indent);
    case "application/x-www-form-urlencoded":
      return parseURLEncoded(postData.params, indent);
    case "multipart/form-data":
      return parseFormData(postData.params, indent);
    default:
      return "";
  }
}

// TODO: proper typing
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

  const sanetized = headers.map((header) => ({
    ...header,
    name: header.name.replace(/^:/, ""),
  }));

  const filtered = sanetized.filter(
    ({ name }) => !ignoredHeaders.has(name.toLowerCase())
  );

  return filtered
    .map((header) => `${indent}-H '${header.name}: ${header.value}'`)
    .join(`${indent}\\\n`);
}

// TODO: maybe handle cookies?
// TODO: handle basic authentication?
// TODO: curl options: multi line, multiline char, quote type, long form options
function parse({ request }: HAREntry) {
  const indent = "  ";
  let snippet = "curl";
  snippet += `${indent}-X ${request.method}`;
  snippet += `${indent}'${request.url}'${indent}\\\n`;

  if (request.headers.length) {
    snippet += getHeaders(request.headers, indent);
  }

  if (request.postData) {
    snippet += "\n";
    snippet += getPostData(request.postData, indent);
  }

  return snippet;
}

export default {
  displayName: "Curl",
  language: ELanguages.Shell,
  parse,
} as Generator;

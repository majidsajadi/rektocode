import { ELanguages, Generator, HAREntry } from "../types";

// TODO: http version, formdata, basic auth
// TODO: curl options: multi line, quote type, long form options
function parse(entry: HAREntry) {
  const ignoredHeaders = new Set<string>([
    "host",
    "method",
    "path",
    "scheme",
    "version",
  ]);

  let snippet = "curl";

  snippet += `\t-X ${entry.request.method}`;

  snippet += `\t'${entry.request.url}' \\\n`;

  entry.request.headers.forEach((header) => {
    const name = header.name.replace(/^:/, "");

    if (!ignoredHeaders.has(name.toLowerCase())) {
      snippet += `\t-H '${name}: ${header.value}' \\\n`;
    }
  });

  if (entry.request.postData?.text) {
    snippet += `\t--data-raw '${entry.request.postData.text}'`;
  }

  return snippet;
}

export default {
  displayName: "Curl",
  language: ELanguages.Shell,
  parse,
} as Generator;

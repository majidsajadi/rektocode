import { HAREntry } from "../types";

// TODO: http version
// TODO: curl options: multi line, quote type, long form options
export default function toCurl(entry: HAREntry) {
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

  if (entry.request.postData) {
    snippet += `\t--data-raw '${entry.request.postData.text}'`;
  }

  return snippet;
}

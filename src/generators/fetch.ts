import { HAREntry } from "../types";

// TODO: http version, credential, referrer, cors mode
// TODO: fetch options: indent
export default function toCurl(entry: HAREntry) {
  const ignoredHeaders = new Set<string>([
    "host",
    "method",
    "path",
    "scheme",
    "version",
    // https://fetch.spec.whatwg.org/#forbidden-header-name
    "accept-charset",
    "accept-encoding",
    "access-control-request-headers",
    "access-control-request-method",
    "connection",
    "content-length",
    "cookie",
    "cookie2",
    "date",
    "dnt",
    "expect",
    "host",
    "keep-alive",
    "origin",
    "referer",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "via",
  ]);

  const headerData = new Headers();
  entry.request.headers.forEach((header) => {
    const name = header.name.replace(/^:/, "");

    if (!ignoredHeaders.has(name.toLowerCase())) {
      headerData.append(name, header.value);
    }
  });

  const headers: {
    [name: string]: string;
  } = {};

  for (const [name, value] of headerData.entries()) {
    headers[name] = value;
  }

  const fetchOptions = {
    method: entry.request.method,
    body: entry.request.postData?.text,
    headers: Object.keys(headers).length ? headers : void 0,
  };

  const options = JSON.stringify(fetchOptions, null, 2);
  return `fetch("${entry.request.url}", ${options});`;
}

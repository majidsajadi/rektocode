import { ELanguages, Generator, HAREntry } from "../types";
import MIMEType from 'whatwg-mimetype';

// TODO: http version, credential, referrer, cors mode, basic auth, form data
function parse(entry: HAREntry) {

  if (entry.request.postData?.mimeType) {
    const mimeType = new MIMEType(entry.request.postData?.mimeType);
    return JSON.stringify({ type: mimeType.subtype, sub: mimeType.subtype })

  }

  return JSON.stringify(entry)
  // const ignoredHeaders = new Set<string>([
  //   "host",
  //   "method",
  //   "path",
  //   "scheme",
  //   "version",
  // ]);

  // let snippet = "package main\n\n";
  // snippet += 'import (\n\t"fmt"\n\t"net/http"\n\t"io/ioutil"\n';
  // if (entry.request.postData?.text) {
  //   snippet += '\t"strings"\n';
  // }
  // snippet += ")\n\n";
  // snippet += `func main() {\n\turl := "${entry.request.url}"\n`;
  // snippet += `\tmethod := "${entry.request.method}"\n\n`;
  // snippet += "\tclient := &http.Client{}\n\n";

  // if (entry.request.postData?.text) {
  //   snippet += `\tdata := strings.NewReader(\`${JSON.parse(entry.request.postData.text)}\`)\n`;
  //   snippet += "\treq, err := http.NewRequest(method, url, data)\n";
  // } else {
  //   snippet += "\treq, err := http.NewRequest(method, url, nil)\n";
  // }

  // snippet += `\tif err != nil {\n\t\tfmt.Println(err)\n`;
  // snippet += `\t\treturn\n\t}\n\n`;

  // entry.request.headers.forEach((header) => {
  //   const name = header.name.replace(/^:/, "");

  //   if (!ignoredHeaders.has(name.toLowerCase())) {
  //     snippet += `\treq.Header.Add("${name}", "${encodeURIComponent(
  //       header.value
  //     )}")\n`;
  //   }
  // });

  // if (entry.request.headers.length) {
  //   snippet += "\n";
  // }

  // snippet += `\tres, err := client.Do(req)\n`;
  // snippet += `\tif err != nil {\n\t\tfmt.Println(err)\n`;
  // snippet += `\t\treturn\n\t}\n`;
  // snippet += `\tdefer res.Body.Close()\n\n\tbody, err := ioutil.ReadAll(res.Body)\n`;
  // snippet += `\tif err != nil {\n\t\tfmt.Println(err)\n`;
  // snippet += `\t\treturn\n\t}\n`;
  // snippet += `\tfmt.Println(string(body))\n}`;

  // return snippet;
}

export default {
  displayName: "Golang",
  language: ELanguages.Golang,
  parse,
} as Generator;

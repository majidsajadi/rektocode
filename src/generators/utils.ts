import MIMEType from "whatwg-mimetype";

// https://github.com/ChromeDevTools/devtools-frontend/blob/805c1e9f351c42b9a0dbc07b328e9b441105aefe/front_end/panels/network/NetworkLogView.ts#L2093
export function escapeString(str: string): string {
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

export function getMimeType(raw: string): string {
  return new MIMEType(raw).essence;
}

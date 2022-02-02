import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { SplitPane } from "react-collapse-pane";
import { BanIcon, DuplicateIcon, CogIcon } from "./icons";

const code = `var myHeaders = new Headers();
myHeaders.append("client-token", "Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzg4NWUxMGJmZjZlMDVmNDMwZmJmYiIsIm5hbWUiOiJiYW1ibyIsInVzZXJuYW1lIjoiYmFtYm8tYXBwIiwidGFkYmlyVXNlcm5hbWUiOiJtYXJrYXppIiwiaWF0IjoxNjQyNTk3NDc0fQ.I5SJxcClHrXD_mrK6C9y5gTQjEM4f_GIGtmkTBwheyMAUaPIujlHFkMPs3L2PXLT29bPKKMVR6iorvvusySo1bc_UsQmx8MD5alpXHvMhOOHmq8g9qx3mzJcZ4LIjOPI_8zjdY7DAVAvf9xIEaLGTMRAH-icifUzM1wBKe_fO_BWYVjVi1C5tIBgqm-vBG0vpzUSrrtwgLwJ7N4vXoyiCH8C1YBwuo1gyqKa_QiWgBoKkVUcZj3X0FWTO9MQJG943fGebu31aW_FpZgR5Orv0HFVa4-aTV0BKY40Ub5z7tUQzEeZ1-muAWBSBLEk1gIy1wZVRGbL4AZCsoHVW_qXQA");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImI3MmYyMjczZTE4YTQ0YjQ5OTFmMDg3ODIzNzQyYmI1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2NDIyMzE5NTYsImV4cCI6MTY1MDAwNzk1NiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50LmVtb2ZpZC5jb20iLCJhdWQiOlsicmVnLWFwaSIsIm9hdXRoLWFwaSIsImh0dHBzOi8vYWNjb3VudC5lbW9maWQuY29tL3Jlc291cmNlcyJdLCJjbGllbnRfaWQiOiJpbnYtbW9iIiwic3ViIjoiMTZlODU5YmUtMWZjNi00YWQ4LTk1ZTMtMDFhMWZjM2NiMDU5IiwiYXV0aF90aW1lIjoxNjQyMjMxOTU2LCJpZHAiOiJsb2NhbCIsInBrIjoiMTZlODU5YmUtMWZjNi00YWQ4LTk1ZTMtMDFhMWZjM2NiMDU5IiwidHdvX2ZhY3Rvcl9lbmFibGVkIjoiZmFsc2UiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIxNmU4NTliZS0xZmM2LTRhZDgtOTVlMy0wMWExZmMzY2IwNTkiLCJuYW1lIjoiMTZlODU5YmUtMWZjNi00YWQ4LTk1ZTMtMDFhMWZjM2NiMDU5IiwiZW1haWwiOiJoYW1pZC56YWhlZGk5MEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGhvbmVfbnVtYmVyIjoiMDkzMzIwMDI2MDIiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOnRydWUsImRpc3BsYXlfbmFtZSI6Itit2YXbjNiv2LHYttinINiy2KfZh9iv24wg2YbZiNis2Ycg2K_ZhyDYs9in2K_Yp9iqIiwiZmlyc3RuYW1lIjoi2K3ZhduM2K_Ysdi22KciLCJsYXN0bmFtZSI6Itiy2KfZh9iv24wg2YbZiNis2Ycg2K_ZhyDYs9in2K_Yp9iqIiwibmF0aW9uYWxfaWQiOiIwMDEzNDQ0MjcxIiwibmF0aW9uYWxfaWRfdmVyaWZpZWQiOiJ0cnVlIiwiY3VzdG9tZXJfaXNpbiI6IjExMjkwMDEzNDQ0MjcxIiwiYm91cnNlX2NvZGUiOiLYstin2YfZgDA5Njc3Iiwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsImFjY291bnQiLCJyZWctYXBpIiwib2F1dGgtYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbInB3ZCJdfQ.Y3sqzXpwxeVdIp2BruMJQWYO-inODv1whSSyw9jX43Xf8Vm-y8u516MRA4jjydAil19nEE9S64JrVCKFoG2wU4To0pPwSsm9qkCaVwAwJ30bUD72azQlpW6ic_y2k12H6bAZ3_Uaak9ToN984JWDek5HN8xudsLU9rATQQMGm0nX6S3Ozpb3MASiQwxwgreV5x6VqgCEqcF3ABxTDvsZz0FyUMc8jNI_mMwz1SRjtYu9Plikdp29dIwISqe0rhaJKMnFHzyrQQFn3HJfubyExJKPtwTmoiTvLjpnr5XN3EBnrjglFU26lzNhvepUCrnpLyaB4nucNtEXn-Gzr3_X-g");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "requests": [
    {
      "fundCode": "10762",
      "amount": 2500000
    }
  ],
  "successRedirectUrl": "mofid://www.bambo.app/success",
  "failRedirectUrl": "mofid://www.bambo.app/fail"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://fund.bambocore.ir/api/v1/funds/issuance", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));`;

function App() {
  let myTheme = EditorView.theme(
    {
      "&": {
        color: "var(--primary-color)",
        backgroundColor: "var(--background-color)",
      },
      "&.cm-editor": {
        height: "calc(100vh - 2.5rem)",
      },
      ".cm-content": {
        caretColor: "var(--primary-color)",
      },
      ".cm-gutters": {
        borderRight: "1px solid",
        borderColor: "var(--border-color)",
        backgroundColor: "var(--background-color)",
        color: "var(--secondary-color)",
      },
      ".cm-scroller": {
        overflow: "auto",
        fontFamily: "inherit",
        lineHeight: "1.5rem",
      },
      ".cm-activeLine": {
        backgroundColor: "var(--highlight-background-color)",
      },
      ".cm-activeLineGutter": {
        backgroundColor: "var(--highlight-background-color)",
      },
      ".cm-foldPlaceholder": {
        backgroundColor: "transparent",
        border: "none",
        color: "var(--primary-color)",
      },
    },
    { dark: true }
  );

  return (
    <SplitPane
      split="vertical"
      resizerOptions={{
        hoverCss: {
          border: `1px solid var(--border-color)`,
        },
        css: {
          border: `1px solid var(--border-color)`,
        },
      }}
    >
      <div className="flex flex-col">
        <div className="flex-none border-b border-border flex h-10 p-2 space-x-2">
          <div className="flex-1">
            <input
              className="w-full h-full border-0 bg-background outline-none"
              placeholder="Filter"
            />
          </div>
          <BanIcon />
          <CogIcon />
        </div>

        <div className="flex-1">
          <ul>
            <li className="p-1 cursor-pointer odd:bg-highlight-background hover:bg-active-background group">
              <div className="flex space-x-4 items-center">
                <span className="flex-none w-8 text-secondary group-hover:text-white">GET</span>
                <span className="text-success flex-none w-8">200</span>
                <span className="flex-1 group-hover:text-white">https://api.amplitude.com</span>
              </div>
            </li>
            <li className="p-1 cursor-pointer odd:bg-highlight-background hover:bg-active-background group">
              <div className="flex space-x-4 items-center">
                <span className="flex-none w-8 text-secondary group-hover:text-white">POST</span>
                <span className="text-danger flex-none w-8">500</span>
                <span className="flex-1 group-hover:text-white">https://api.amplitude.com</span>
              </div>
            </li>
            <li className="p-1 cursor-pointer odd:bg-highlight-background hover:bg-active-background group">
              <div className="flex space-x-4 items-center">
                <span className="flex-none w-8 text-secondary group-hover:text-white">PUT</span>
                <span className="text-alert flex-none w-8">300</span>
                <span className="flex-1 group-hover:text-white">https://api.amplitude.com</span>
              </div>
            </li>
            <li className="p-1 cursor-pointer odd:bg-highlight-background hover:bg-active-background group">
              <div className="flex space-x-4 items-center">
                <span className="flex-none w-8 text-secondary group-hover:text-white">DEL</span>
                <span className="text-info flex-none w-8">100</span>
                <span className="flex-1 group-hover:text-white">https://api.amplitude.com</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex-none border-b border-border flex h-10 space-x-2 items-center px-2">
            <select className="w-36 truncate bg-highlight-background border-0 focus:ring-0 p-1" name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          <DuplicateIcon />
        </div>

        <div className="flex-1">
          <CodeMirror
            value={code}
            theme={[myTheme, oneDark]}
            height="100%"
            editable={false}
            extensions={[javascript(), EditorView.lineWrapping]}
          />
        </div>
      </div>
    </SplitPane>
  );
}

export default App;

import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import theme from "../utils/theme";

type EditorProps = {
  value?: string;
};

export default function Editor({ value }: EditorProps) {
  return (
    <CodeMirror
      value={value}
      theme={[theme, oneDark]}
      height="100%"
      editable={false}
      extensions={[javascript(), EditorView.lineWrapping]}
    />
  );
}

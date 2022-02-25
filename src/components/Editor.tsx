import { useMemo } from 'react';
import CodeMirror, { EditorView } from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { StreamLanguage } from '@codemirror/stream-parser';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { shell } from '@codemirror/legacy-modes/mode/shell';
import { go } from '@codemirror/legacy-modes/mode/go';
import { ELanguages } from '../types';
import theme from '../utils/theme';

type EditorProps = {
  value?: string;
  langauge: ELanguages;
};

export default function Editor({ value, langauge }: EditorProps) {
  const extensions = useMemo(() => {
    const defaultExtensions = [EditorView.lineWrapping];
    switch (langauge) {
      case ELanguages.JavaScript:
        return [...defaultExtensions, javascript()];
      case ELanguages.Python:
        return [...defaultExtensions, python()];
      case ELanguages.Shell:
        return [...defaultExtensions, StreamLanguage.define(shell)];
      case ELanguages.Golang:
        return [...defaultExtensions, StreamLanguage.define(go)];
      
      default:
        return defaultExtensions;
    }
  }, [langauge]);

  return (
    <CodeMirror
      value={value}
      theme={[theme, oneDark]}
      height="100%"
      editable={false}
      extensions={extensions}
    />
  );
}

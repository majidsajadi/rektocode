import { EditorView } from '@uiw/react-codemirror';

export default EditorView.theme(
  {
    '&': {
      color: 'var(--primary-color)',
      backgroundColor: 'var(--background-color)'
    },
    '&.cm-editor': {
      height: 'calc(100vh - 2.5rem)'
    },
    '.cm-content': {
      caretColor: 'var(--primary-color)'
    },
    '.cm-gutters': {
      borderRight: '1px solid',
      borderColor: 'var(--border-color)',
      backgroundColor: 'var(--background-color)',
      color: 'var(--secondary-color)'
    },
    '.cm-scroller': {
      overflow: 'auto',
      fontFamily: 'inherit',
      lineHeight: '1.5rem'
    },
    '.cm-activeLine': {
      backgroundColor: 'var(--highlight-background-color)'
    },
    '.cm-activeLineGutter': {
      backgroundColor: 'var(--highlight-background-color)'
    },
    '.cm-foldPlaceholder': {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'var(--primary-color)'
    }
  },
  { dark: true }
);

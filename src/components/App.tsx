import { useState } from 'react';
import { SplitPane } from 'react-collapse-pane';
import { HAREntry } from '../types';
import Snippet from './Snippet';
import Enteries from './Enteries';

// TODO: focus editor
// TODO: sort tailwind header
// TODO: clear snippet on handleClear
function App() {
  const [selected, setSelected] = useState<HAREntry | null>(null);

  const resizerOptions = {
    hoverCss: {
      border: `1px solid var(--border-color)`
    },
    css: {
      border: `1px solid var(--border-color)`
    }
  };

  return (
    <SplitPane split="vertical" resizerOptions={resizerOptions}>
      <Enteries onSelect={setSelected} />
      <Snippet entry={selected} />
    </SplitPane>
  );
}

export default App;

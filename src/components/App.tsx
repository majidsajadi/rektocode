import { useEffect, useState } from "react";
import { SplitPane } from "react-collapse-pane";
import { HAREntry } from "../types";
import EntryList from "./EntryList";
import EntryListHeader from "./EntryListHeader";
import EditorHeader from "./EditorHeader";
import Editor from "./Editor";
import data from "../data";

// TODO: failed requests
// TODO: trim request. get only path
// TODO: focus editor
// TODO: sort tailwind header

function App() {
  const [entries, setEntries] = useState<HAREntry[]>([]);
  const [selected, setSelected] = useState<HAREntry | null>(null);

  const addEntry = (entry: HAREntry) => {
    if (!["xhr", "fetch"].includes(entry._resourceType as string)) return;
    setEntries((prev) => [...prev, entry]);
  };

  useEffect(() => {
    if (import.meta.env.MODE === "development") {
      data.forEach((i) => addEntry((i as unknown) as HAREntry));
    } else {
      chrome.devtools.network.getHAR((harLog) => {
        harLog.entries.forEach(addEntry);
      });
      chrome.devtools.network.onRequestFinished.addListener(addEntry);
    }
  }, []);

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
        <div className="flex-none h-10">
          <EntryListHeader />
        </div>
        <div className="flex-1">
          <EntryList entries={entries} onClick={setSelected} />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex-none h-10">
          <EditorHeader />
        </div>

        <div className="flex-1">
          <Editor value={JSON.stringify(selected, null, 2)} />
        </div>
      </div>
    </SplitPane>
  );
}

export default App;

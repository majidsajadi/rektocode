import { useEffect, useState } from "react";
import { HAREntry } from "../types";
import data from "../data";
import EntryList from "./EntryList";
import EntryListHeader from "./EntryListHeader";

type EnteriesProps = {
    onSelect: (entry: HAREntry) => void
}

export default function Enteries({ onSelect }: EnteriesProps) {
  const [entries, setEntries] = useState<HAREntry[]>([]);

  
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
    <div className="flex flex-col">
      <div className="flex-none h-10">
        <EntryListHeader />
      </div>
      <div className="flex-1">
        <EntryList entries={entries} onClick={onSelect} />
      </div>
    </div>
  );
}

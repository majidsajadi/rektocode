import React, { useEffect, useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { HAREntry } from '../types';
import data from '../data';
import EntryList from './EntryList';
import { BanIcon } from './icons';

type EnteriesProps = {
  onSelect: (entry: HAREntry | null) => void;
};

export default function Enteries({ onSelect }: EnteriesProps) {
  const [entries, setEntries] = useState<HAREntry[]>([]);
  const [filter, setFilter] = useState<string>();

  const addEntry = (entry: HAREntry) => {
    if (!['xhr', 'fetch'].includes(entry._resourceType as string)) return;
    setEntries((prev) => [...prev, entry]);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleClear = () => {
    setEntries([]);
    setFilter(undefined);
    onSelect(null);
  };

  const filtered = useMemo(() => {
    if (!filter) {
      return entries;
    }

    const options = {
      keys: ['request.url']
    };
    const fuse = new Fuse(entries, options);

    return fuse.search(filter).map((f) => f.item);
  }, [entries, filter]);

  useEffect(() => {
    if (import.meta.env.MODE === 'development') {
      data.forEach((i) => addEntry(i as unknown as HAREntry));
    } else {
      // eslint-disable-next-line no-undef
      chrome.devtools.network.getHAR((harLog) => {
        harLog.entries.forEach(addEntry);
      });
      // eslint-disable-next-line no-undef
      chrome.devtools.network.onRequestFinished.addListener(addEntry);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex-none">
        <div className="border-b border-border flex space-x-2 items-center px-2">
          <div className="flex-1">
            <input
              className="w-48 p-1 border-0 bg-highlight-background outline-none"
              placeholder="Filter"
              onChange={handleFilter}
            />
          </div>
          <BanIcon onClick={handleClear} />
        </div>
      </div>
      <div className="flex-1">
        <EntryList entries={filtered} onClick={onSelect} />
      </div>
    </div>
  );
}

import { v4 as uuidv4 } from "uuid";
import { HAREntry } from "../types";

type EntryListProps = {
  entries: HAREntry[];
  onClick: (entry: HAREntry) => void;
};

export default function EntryList({ entries, onClick }: EntryListProps) {
  return (
    <ul>
      {entries.map((entry) => (
        <li
          key={uuidv4()}
          onClick={() => onClick(entry)}
          className="p-1 cursor-pointer odd:bg-highlight-background hover:bg-active-background group"
        >
          <div className="flex space-x-4 items-center">
            <span className="flex-none w-8 text-secondary group-hover:text-white">
              {entry.request.method}
            </span>
            <span className="text-success flex-none w-8">
              {entry.response.status}
            </span>
            <span className="flex-1 group-hover:text-white">
              {entry.request.url}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

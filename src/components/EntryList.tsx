import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { HAREntry } from "../types";

type EntryListProps = {
  entries: HAREntry[];
  onClick: (entry: HAREntry) => void;
};

export default function EntryList({ entries, onClick }: EntryListProps) {
  const getMethodCLS = (status: number) => {
    const base = "flex-none w-8";
    let color = "text-success";

    if (status > 400) {
      color = "text-danger";
    } else if (status >= 300 && status < 400) {
      color = "text-alert";
    }

    return classNames(base, color);
  };

  return (
    <ul>
      {entries.map((entry) => (
        <li
          key={uuidv4()}
          onClick={() => onClick(entry)}
          className="p-1 cursor-pointer odd:bg-highlight-background hover:bg-active-background group"
        >
          <div className="flex space-x-4 items-center">
            <span className="flex-none w-14 text-secondary group-hover:text-white">
              {entry.request.method}
            </span>
            <span className={getMethodCLS(entry.response.status)}>
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

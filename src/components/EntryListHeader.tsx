import { BanIcon } from "./icons";

export default function EntryListHeader() {
  return (
    <div className="border-b border-border flex p-2 space-x-2">
      <div className="flex-1">
        <input
          className="w-full h-full border-0 bg-background outline-none"
          placeholder="Filter"
        />
      </div>
      <BanIcon />
    </div>
  );
}

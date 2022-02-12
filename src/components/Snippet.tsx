import { useMemo, useState } from "react";
import copy from "copy-to-clipboard";
import { DuplicateIcon } from "./icons";
import { Generator, HAREntry } from "../types";
import generators from "../generators";
import Editor from "./Editor";

type CodeProps = {
  entry: HAREntry | null;
};

const DEFAULT_GENERATOR = "curl";

export default function Snippet({ entry }: CodeProps) {
  const [selectedGenerator, setSelectedGenerator] = useState<Generator>(
    generators[DEFAULT_GENERATOR]
  );

  const snippet = useMemo(() => {
    if (!entry) {
      return;
    }

    return selectedGenerator.parse(entry);
  }, [selectedGenerator, entry]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenerator(generators[e.target.value]);
  };

  const handleCopy = () => {
    if (snippet) {
      copy(snippet);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex-none h-10">
        <div className="border-b border-border flex space-x-2 items-center px-2">
          <select
            className="w-36 truncate bg-highlight-background border-0 focus:ring-0 p-1"
            name="generator"
            id="generator"
            defaultValue={DEFAULT_GENERATOR}
            onChange={handleSelect}
          >
            {Object.entries(generators).map(([key, gen]) => (
              <option key={key} value={key}>
                {gen.displayName}
              </option>
            ))}
          </select>
          <DuplicateIcon
            onClick={handleCopy}
            className={!snippet ? "opacity-50 cursor-not-allowed": ""}
          />
        </div>
      </div>
      <div className="flex-1">
        <Editor value={snippet} langauge={selectedGenerator.language}/>
      </div>
    </div>
  );
}
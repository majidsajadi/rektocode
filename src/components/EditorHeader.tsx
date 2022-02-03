import { DuplicateIcon } from "./icons";

export default function EditorHeader() {
  return (
    <div className="border-b border-border flex space-x-2 items-center px-2">
      <select
        className="w-36 truncate bg-highlight-background border-0 focus:ring-0 p-1"
        name="cars"
        id="cars"
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <DuplicateIcon />
    </div>
  );
}

export type HAREntry = chrome.devtools.network.HAREntry;

export enum ELanguages {
  JavaScript = "javascript",
  Shell = "shell",
}

export type Generator = {
  displayName: string;
  language: ELanguages;
  parse: (entry: HAREntry) => string;
};

export type Generators = {
  [key: string]: Generator;
};

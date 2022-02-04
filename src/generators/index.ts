import { Generators } from "../types";
import curl from "./curl";
import fetch from "./fetch";

const generators: Generators = {
  fetch: fetch,
  curl: curl,
};

export default generators;

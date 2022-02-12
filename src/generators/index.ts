import { Generators } from '../types';
import curl from './curl';
import fetch from './fetch';
import golang from './golang';

const generators: Generators = {
  fetch,
  curl,
  golang
};

export default generators;

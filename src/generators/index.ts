import { Generators } from '../types';
import curl from './curl';
import javascriptFetch from './javascript-fetch';
import golangHTTP from './golang-http';
import pythonRequests from './python-requests';

const generators: Generators = {
  curl,
  javascriptFetch,
  golangHTTP,
  pythonRequests
};

export default generators;

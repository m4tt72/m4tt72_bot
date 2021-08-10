import { readFileSync } from 'fs';
import { join } from 'path';

const readFile = (path: string) =>
  readFileSync(join(__dirname, path), {
    encoding: 'utf8',
  });

export default {
  help: readFile('help.html'),
  start: readFile('start.html'),
};

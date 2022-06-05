import path, { dirname } from 'path';
import { fileURLToPath } from 'url'
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';
import './files/c.mjs';

const a = JSON.parse(
  await readFile(
    new URL('./files/a.json', import.meta.url)
  )
);

const b = JSON.parse(
  await readFile(
    new URL('./files/b.json', import.meta.url)
  )
);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer };


import { createReadStream } from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { stdout } from 'process';

export const calculateHash = async () => {
  const projectDir = path.resolve(path.dirname(''));
  const __dirname = path.join(projectDir, 'src', 'hash', 'files');

  const hash = createHash('sha256');

  const input = createReadStream(path.join(__dirname, 'fileToCalculateHashFor.txt'));
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

calculateHash();

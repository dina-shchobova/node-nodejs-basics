import { createReadStream } from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { stdout } from 'process';

export const calculateHash = async () => {
  const hash = createHash('sha256');

  const input = createReadStream(path.join(path.dirname(''), 'files', 'fileToCalculateHashFor.txt'));
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

calculateHash();

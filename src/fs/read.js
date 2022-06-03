import { readFile } from 'fs/promises';
import path from 'path';

export const read = async () => {
  try {
    const text = await readFile(path.join(path.dirname(''), 'files', 'fileToRead.txt'), 'utf8');
    console.log(text);
  } catch {
    console.log('FS operation failed');
  }
};

read();

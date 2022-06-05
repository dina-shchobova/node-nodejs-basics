import {readFile} from 'fs/promises';
import path from 'path';

export const read = async () => {
  try {
    const projectDir = path.resolve(path.dirname(''));
    const text = await readFile(path.join(projectDir, 'src', 'fs', 'files', 'fileToRead.txt'), 'utf8');
    console.log(text);
  } catch (e) {
    console.log(e);
    console.log('FS operation failed');
  }
};

read();

import fs, { readdir } from 'fs/promises';
import path from 'path';

export const rename = async () => {
  let wrongFileExists = false;
  let properFileExists = false;
  const files = await readdir(path.join(path.dirname(''), 'files'));
  for (const file of files) {
    if (file === 'properFilename.txt') {
      properFileExists = true;
      break;
    }
    if (file === 'wrongFilename.txt') {
      wrongFileExists = true;
      const oldName = path.join(path.dirname(''), 'files', 'wrongFilename.txt');
      const newName = path.join(path.dirname(''), 'files', 'properFilename.txt');
      fs.rename(oldName, newName);
    }
  }
  if (wrongFileExists === false || properFileExists === true) {
    throw new Error('FS operation failed');
  }
};

await rename();

import { readdir, rm } from 'fs/promises';
import path from 'path';

export const remove = async () => {
  let fileWasFound = false;
  const files = await readdir(path.join(path.dirname(''), 'files'));
  for (const file of files) {
    if (file === 'fileToRemove.txt') {
      fileWasFound = true;
      rm(path.join(path.dirname(''), 'files', 'fileToRemove.txt'));
      break;
    }
  }
  if (fileWasFound === false) {
    throw new Error('FS operation failed');
  }
};

await remove();

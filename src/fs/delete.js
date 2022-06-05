import { readdir, rm } from 'fs/promises';
import path from 'path';

export const remove = async () => {
  try {
    const projectDir = path.resolve(path.dirname(''));
    const __dirname = path.join(projectDir, 'src', 'fs', 'files');
    let fileWasFound = false;
    const files = await readdir(__dirname);
    for (const file of files) {
      if (file === 'fileToRemove.txt') {
        fileWasFound = true;
        await rm(path.join(projectDir, 'src', 'fs', 'files', 'fileToRemove.txt'));
        break;
      }
    }
    if (fileWasFound === false) {
      throw new Error();
    }
  } catch {
    console.log('FS operation failed');
  }

};

await remove();

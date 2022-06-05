import fs, { readdir } from 'fs/promises';
import path from 'path';

export const rename = async () => {
  try {
    const projectDir = path.resolve(path.dirname(''));
    const __dirname = path.join(projectDir, 'src', 'fs', 'files');
    let wrongFileExists = false;
    let properFileExists = false;
    const files = await readdir(__dirname);
    for (const file of files) {
      if (file === 'properFilename.txt') {
        properFileExists = true;
        break;
      }
      if (file === 'wrongFilename.txt') {
        wrongFileExists = true;
        const oldName = path.join(__dirname, 'wrongFilename.txt');
        const newName = path.join(__dirname, 'properFilename.txt');
        await fs.rename(oldName, newName);
      }
    }
    if (wrongFileExists === false || properFileExists === true) {
      throw new Error();
    }
  } catch {
    console.log('FS operation failed');
  }

};

await rename();

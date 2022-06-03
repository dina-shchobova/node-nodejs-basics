import fs, { readdir } from 'fs/promises';
import path from 'path';

export const copy = async () => {
  const files = await readdir(path.dirname(''));
  for (const file of files) {
    if (file === 'files_copy' && !file.isFile) {
      throw new Error('FS operation failed')
    }
  }

  fs.mkdir(path.join(path.dirname(''), 'files_copy'), err => {
    if (err) throw err;
  });

  const originFiles = await readdir(path.join(path.dirname(''), 'files'));
  for (const file of originFiles) {
    try {
      const from = path.join(path.dirname(''), 'files', `${file}`);
      const to = path.join(path.dirname(''), 'files_copy', `${file}`);
      await fs.copyFile(from, to);
    } catch {
      throw new Error('FS operation failed 2');
    }
  }
};

await copy();

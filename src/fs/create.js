import fs, { readdir } from 'fs/promises';
import path from 'path';

export const create = async () => {
  const __dirname = path.join(path.dirname(''), 'files');
  const files = await readdir(__dirname);
  for (const file of files) {
    if (file === 'fresh.txt') {
      throw new Error('FS operation failed')
    }
  }
  fs.writeFile(
      path.join(__dirname, 'fresh.txt'),
      'I am fresh and young',
  );
};

await create();

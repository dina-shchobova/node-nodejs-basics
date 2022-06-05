import fs, { readdir, access } from 'fs/promises';
import path from 'path';

export const create = async () => {
  try {
    const __dirname = path.join(path.dirname(''), 'files');
    await access(__dirname);
    const files = await readdir(__dirname);
    for (const file of files) {
      if (file === 'fresh.txt') {
        throw new Error();
      }
    }
    await fs.writeFile(
      path.join(__dirname, 'fresh.txt'),
      'I am fresh and young',
    );
  } catch {
    console.log('FS operation failed');
  }
};

await create();

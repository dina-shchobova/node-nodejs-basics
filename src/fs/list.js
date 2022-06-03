import { readdir, access } from 'fs/promises';
import path from 'path';

export const list = async () => {
  try {
    await access(path.join(path.dirname(''), 'files'));
    const files = await readdir(path.join(path.dirname(''), 'files'));
    console.log(files);
  } catch {
    console.log('FS operation failed');
  }
};

await list();

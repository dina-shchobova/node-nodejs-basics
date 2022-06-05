import { readdir, access } from 'fs/promises';
import path from 'path';

export const list = async () => {
  try {
    const projectDir = path.resolve(path.dirname(''));
    const __dirname = path.join(projectDir, 'src', 'fs', 'files');
    await access(__dirname);
    const files = await readdir(__dirname);
    console.log(files);
  } catch {
    console.log('FS operation failed');
  }
};

await list();

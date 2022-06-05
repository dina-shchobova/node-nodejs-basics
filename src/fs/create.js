import fs, { readdir, access } from 'fs/promises';
import path from 'path';

export const create = async () => {
  try {
    const projectDir = path.resolve(path.dirname(''));
    const __dirname = path.join(projectDir, 'src', 'fs', 'files');
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

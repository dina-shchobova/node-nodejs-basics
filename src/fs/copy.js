import fs, {readdir, access} from 'fs/promises';
import path from 'path';

export const copy = async () => {
  const files = await readdir(path.dirname(''));

  try {
    for (const file of files) {
      if (file === 'files_copy' && !file.isFile) {
        throw new Error();
      }
    }

    await access(path.join(path.dirname(''), 'files'));
    await fs.mkdir(path.join(path.dirname(''), 'files_copy'), err => {
      if (err) throw err;
    });

    const originFiles = await readdir(path.join(path.dirname(''), 'files'));
    for (const file of originFiles) {
      const from = path.join(path.dirname(''), 'files', `${file}`);
      const to = path.join(path.dirname(''), 'files_copy', `${file}`);
      await fs.copyFile(from, to);
    }
  } catch {
    console.log('FS operation failed');
  }

};

await copy();

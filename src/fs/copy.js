import fs, {readdir, access} from 'fs/promises';
import path from 'path';

export const copy = async () => {
  const projectDir = path.resolve(path.dirname(''));
  const files = await readdir(path.join(projectDir, 'src', 'fs'));

  try {
    for (const file of files) {
      if (file === 'files_copy' && !file.isFile) {
        throw new Error();
      }
    }

    await access(path.join(projectDir, 'src', 'fs', 'files'));
    await fs.mkdir(path.join(projectDir, 'src', 'fs', 'files_copy'), err => {
      if (err) throw err;
    });

    const originFiles = await readdir(path.join(projectDir, 'src', 'fs', 'files'));
    for (const file of originFiles) {
      const from = path.join(projectDir, 'src', 'fs', 'files', `${file}`);
      const to = path.join(projectDir, 'src', 'fs', 'files_copy', `${file}`);
      await fs.copyFile(from, to);
    }
  } catch {
    console.log('FS operation failed');
  }

};

await copy();

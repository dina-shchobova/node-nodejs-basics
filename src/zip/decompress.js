import { createWriteStream, createReadStream } from 'fs';
import { access } from 'fs/promises';
import path from 'path';
import zlib from 'zlib';

export const decompress = async () => {
  const projectDir = path.resolve(path.dirname(''));
  const __dirname = path.join(projectDir, 'src', 'zip', 'files');

  try {
    await access(path.join(__dirname, 'archive.gz'));
    const readStream = createReadStream(path.join(__dirname, 'archive.gz'));
    const writeStream = createWriteStream(path.join(__dirname, 'fileToCompress.txt'));
    let unzip = zlib.createUnzip();
    readStream.pipe(unzip).pipe(writeStream);
  } catch (e) {
    console.log(e.message);
  }
};

decompress();

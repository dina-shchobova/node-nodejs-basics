import { createWriteStream, createReadStream } from 'fs';
import { access } from 'fs/promises';
import path from 'path';
import zlib from 'zlib';

export const decompress = async () => {
  try {
    await access(path.join(path.dirname(''), 'files', 'archive.gz'));
    const readStream = createReadStream(path.join(path.dirname(''), 'files', 'archive.gz'));
    const writeStream = createWriteStream(path.join(path.dirname(''), 'files', 'fileToCompress.txt'));
    let unzip = zlib.createUnzip();
    readStream.pipe(unzip).pipe(writeStream);
  } catch (e) {
    console.log(e.message);
  }
};

decompress();

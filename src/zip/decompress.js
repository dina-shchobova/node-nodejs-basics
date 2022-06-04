import { createWriteStream, createReadStream } from 'fs';
import path from 'path';
import zlib from 'zlib';

export const decompress = async () => {
  const readStream = createReadStream(path.join(path.dirname(''), 'files', 'archive.gz'));
  const writeStream = createWriteStream(path.join(path.dirname(''), 'files', 'fileToCompress.txt'));
  let unzip = zlib.createUnzip();
  readStream.pipe(unzip).pipe(writeStream);
};

decompress();

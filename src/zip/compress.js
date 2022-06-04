import { createWriteStream, createReadStream } from 'fs';
import path from 'path';
import zlib from 'zlib';

export const compress = async () => {
  const readStream = createReadStream(path.join(path.dirname(''), 'files', 'fileToCompress.txt'), 'utf-8');
  const writeStream = createWriteStream(path.join(path.dirname(''), 'files', 'archive.gz'));
  let gzip = zlib.createGzip();
  readStream.pipe(gzip).pipe(writeStream);
};

compress();

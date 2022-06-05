import { createWriteStream, createReadStream } from 'fs';
import path from 'path';
import zlib from 'zlib';

export const compress = async () => {
  const projectDir = path.resolve(path.dirname(''));
  const __dirname = path.join(projectDir, 'src', 'zip', 'files');

  const readStream = createReadStream(path.join(__dirname, 'fileToCompress.txt'), 'utf-8');
  const writeStream = createWriteStream(path.join(__dirname, 'archive.gz'));
  let gzip = zlib.createGzip();
  readStream.pipe(gzip).pipe(writeStream);
};

compress();

import { createReadStream } from 'fs';
import path from 'path';

export const read = async () => {
  let data = '';
  const readStream = createReadStream(path.join(path.dirname(''), 'files', 'fileToRead.txt'), 'utf-8');
  readStream.on('data', chunk => data += chunk);
  readStream.on('end', () => process.stdout.write(data));
};

read();

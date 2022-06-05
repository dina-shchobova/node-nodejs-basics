import { createReadStream } from 'fs';
import path from 'path';

export const read = async () => {
  const projectDir = path.resolve(path.dirname(''));
  const __dirname = path.join(projectDir, 'src', 'streams', 'files');
  let data = '';
  const readStream = createReadStream(path.join(__dirname, 'fileToRead.txt'), 'utf-8');
  readStream.on('data', chunk => data += chunk);
  readStream.on('end', () => process.stdout.write(data));
};

read();

import { createWriteStream } from 'fs';
import { stdin, stdout } from 'process';
import path from 'path';

export const write = async () => {
  const projectDir = path.resolve(path.dirname(''));
  const __dirname = path.join(projectDir, 'src', 'streams', 'files');
  const writeStream = createWriteStream(path.join(__dirname, 'fileToWrite.txt'));
  stdout.write('Write some text and press ENTER \n');

  stdin.on('data', data => {
    const value = data.toString();
    writeStream.write(value);
    process.exit();
  });

};

write();

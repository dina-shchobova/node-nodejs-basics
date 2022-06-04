import { Transform } from "stream";
import { stdin, stdout } from 'process';

export const transform = async () => {
  stdout.write('Write some text and press ENTER \n');

  const reverseStream = () => {
    return new Transform({
      transform(chunk, encoding, callback) {
        const reverseStr = chunk.toString().split('').reverse().join('');
        callback(null, reverseStr);
      }
    });
  };

  const reverse = reverseStream();
  stdin.pipe(reverse).pipe(stdout);
};

transform();

import { argv } from 'process';

export const parseArgs = () => {
  argv.forEach((val, index) => {
    if (val.slice(0, 2) === '--') {
      console.log(`${val.slice(2)} is ${argv[index+1]}`);
    }
  });
};

parseArgs();

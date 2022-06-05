import {spawn} from 'child_process';
import {stdin, stdout} from 'process';

export const spawnChildProcess = async (args) => {
  const subprocess = spawn('node', ['./files/script.js', ...args]);

  subprocess.stdout.setEncoding('utf8');
  subprocess.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  subprocess.stderr.on('data', function (data) {
    console.log(data.toString());
  });

  subprocess.on('error', console.log)

  subprocess.stdin.setEncoding('utf8');

  subprocess.on('close', function (code) {
    console.log('process exit code ' + code);
    process.exit();
  });

  stdout.write('Write some text and press ENTER. Write CLOSE to exit. \n');

  stdin.on('data', data => {
    const value = data.toString();
    subprocess.stdin.write(value);
  });


};

await spawnChildProcess(['--uilo', 'utin']);

import {Worker} from 'worker_threads';
import {cpus} from "os";
import path from "path";

export const performCalculations = async () => {
  const projectDir = path.resolve(path.dirname(''));
  const __dirname = path.join(projectDir, 'src', 'wt');

  const numCPUs = cpus().length;
  let promises = [];
  for (let i = 0; i < numCPUs; i++) {
    const worker = new Worker(path.join(__dirname, './worker.js'), {
      workerData: i + 10,
    });
    const promise = new Promise((resolve) => {
      worker.on('message', msg => {
        if (msg instanceof Error) {
          resolve({'status': 'error', 'data': null})
        } else {
          resolve({'status': 'resolved', 'data': msg})
        }
      });
    })
    promises.push(promise);
  }
  return await Promise.all(promises).then(results => {
    console.log(results);
  })
};

performCalculations();

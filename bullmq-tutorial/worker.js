import {Worker} from 'bullmq';

const runworker = () => new Promise((res)=>setTimeout(() => res(), 1*1000));

const worker = new Worker('emailQueue', async (job) => {
    console.log("Processing job: ", job.id);
    console.log("Job data: ", job.data);
    await runworker();
    console.log("Job completed: ", job.id);
}, {
    connection: {
        host: 'localhost',
        port: 6379
    }
});

// worker.on('completed', (job) => {
//     console.log(`Job completed: ${job.id}`);
// });

// worker.on('failed', (job, error) => {
//     console.log(`Job failed: ${job.id}`, error);
// });
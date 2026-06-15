import { Queue } from 'bullmq';

const queue = new Queue('emailQueue', {
    connection: {
        host: 'localhost',
        port: 6379
    }
});

async function addJob(){
    const res = await queue.add('myJob', {
        foo: 'bar'
    });
    console.log(`Job added: ${res.id}`);
    console.log("Job data: ", res.data);
}
console.log("Adding job to the queue");
addJob();
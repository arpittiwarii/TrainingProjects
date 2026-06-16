import { Worker } from 'bullmq'
const worker = new Worker(
    "emailQueue",
    async (job) => {

        console.log("Started:", job.id);
        await new Promise((resolve) =>
            setTimeout(resolve, 5000)
        );
        console.log("Finished:", job.id);

    },
    {
        connection: {
            host: "127.0.0.1",
            port: 6379,
        },
    }
);
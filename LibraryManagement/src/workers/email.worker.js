const { Worker } = require("bullmq");
const { sendWelcomeEmail } = require("../utils/email.service.js");

console.log("Worker started...");

new Worker(
    "email-queue",
    async (job) => {
        console.log("Processing job:", job.name);

        switch (job.name) {
            case "welcome-email":
                await sendWelcomeEmail(job.data);
                break;
        }
    },
    {
        connection: {
            host: "127.0.0.1",
            port: 6379
        }
    }
);
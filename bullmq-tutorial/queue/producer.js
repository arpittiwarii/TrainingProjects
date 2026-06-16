import { Queue } from 'bullmq';

const emailQueue = new Queue('emailQueue', {
    connection: {
        host: 'localhost',
        port: 6379
    }
});

const generatePDF = new Queue('generatePDF', {
    connection: {
        host: 'localhost',
        port: 6379
    }
});

export { emailQueue, generatePDF };


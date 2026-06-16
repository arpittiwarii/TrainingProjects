// import dotenv from 'dotenv';
import express from 'express'
import routes from './routes/index.js';
import { serverAdapter } from './bullboard.js';
// import { emailWorker } from './worker/emailWorker.js'
// import { pdfWorker } from './worker/pdfWorker.js'
// dotenv.config();

// const { REDIS_host, REDIS_port, REDIS_redisPassword } = process.env;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/admin/queues', serverAdapter.getRouter());

app.use('/test', (req, res) => {
    res.send('hello server working')
})
app.use('/api', routes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

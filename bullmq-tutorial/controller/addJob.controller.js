import { emailQueue } from '../queue/producer.js';


async function addJobs(req, res) {
    await emailQueue.add("welcome-email", {
        email: "welcome@gmail.com",
    });
    console.log('welcome email job added')
    await emailQueue.add("password-reset-email", {
        email: "reset@gmail.com",
    });
    console.log("password reset email job added")

    await emailQueue.add("invoice-email", {
        email: "invoice@gmail.com",
    });
    console.log('generate invoice job added')
    res.send("Jobs Added to queue")
}

export default addJobs

// const addJob = async (req, res) => {
//     try {
//         // const { email, name } = req.body;
//         // await emailQueue.add('sendEmail', { email, name });
//         // await generatePDF.add('generate PDF', { email, name })
//         // console.log('Job added to the queue:', { email, name });

//         await emailQueue.add('sendEmail');
//         await generatePDF.add('generate PDF')
//         console.log('Job added to the queue:');
//         res.status(200).json({ message: 'Job added to the queue' });
//     } catch (error) {
//         console.error('Error adding job to the queue:', error);
//         res.status(500).json({ message: 'Failed to add job to the queue' });
//     }
// }

// export default addJob;
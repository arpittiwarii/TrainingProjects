// // import amqp from "amqplib";

// // async function sendMessage() {

// //     const connection =
// //         await amqp.connect(
// //             "amqp://localhost"
// //         );

// //     const channel =
// //         await connection.createChannel();

// //     const queue =
// //         "emailQueue";

// //     await channel.assertQueue(queue);

// //     channel.sendToQueue(
// //         queue,
// //         Buffer.from("Welcome Email")
// //     );

// //     console.log(
// //         "Message Sent"
// //     );

// //     await channel.close();
// //     await connection.close();
// // }

// // sendMessage();

// import amqp from 'amqplib'
// async function sendMessage() {
//     const connection = await amqp.connect(
//         "amqp://localhost"
//     )
//     const channel = await connection.createChannel()
//     const queue = "emailQueue"
//     await channel.assertQueue(queue)
//     for (let i = 1; i <= 5; i++) {

//         channel.sendToQueue(
//             queue,
//             Buffer.from(
//                 `Email ${i}`
//             )
//         );

//     }

//     console.log("message sent")
//     await channel.close()
//     await connection.close();
// }
// sendMessage()

import { connectRabbitMQ }
    from "./connection.js";

export async function publishOrder(
    order
) {

    const channel =
        await connectRabbitMQ();
    console.log('connection build')
    const queue =
        "orderQueue";

    await channel.assertQueue(
        queue,
        {
            durable: true
        }
    );

    channel.sendToQueue(
        queue,
        Buffer.from(
            JSON.stringify(order)
        ),
        {
            persistent: true
        }
    );

    console.log(
        "Order Published"
    );
}
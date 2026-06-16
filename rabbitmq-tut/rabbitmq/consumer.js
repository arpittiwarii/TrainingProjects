
// import amqp from 'amqplib'
// async function receiveMessage() {

//     const connection =
//         await amqp.connect(
//             "amqp://localhost"
//         );

//     const channel =
//         await connection.createChannel();

//     const queue =
//         "emailQueue";

//     await channel.assertQueue(queue);

//     console.log(
//         "Waiting for messages..."
//     );

//     channel.consume(
//         queue,
//         (msg) => {

//             console.log(
//                 msg.content.toString()
//             );

//         },
//         {
//             durable: true
//         }
//     );
// }

// receiveMessage();


import { connectRabbitMQ }
    from "./connection.js";


console.log('fetching messages...')
async function consumeOrders() {

    const channel =
        await connectRabbitMQ();

    const queue =
        "orderQueue";

    await channel.assertQueue(
        queue,
        {
            durable: true
        }
    );

    channel.prefetch(1);

    channel.consume(
        queue,
        async (msg) => {

            try {

                const order =
                    JSON.parse(
                        msg.content.toString()
                    );

                console.log(
                    "Processing:",
                    order
                );


                channel.ack(msg);

            } catch (error) {

                console.error(
                    error
                );

                channel.nack(
                    msg,
                    false,
                    true
                );
            }

        }
    );
}

consumeOrders();
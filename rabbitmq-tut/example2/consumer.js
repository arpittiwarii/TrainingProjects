import amqp from "amqplib";
import { getChannel } from "./connection.js";
let channel = getChannel()
const consume = async () => {
    try {
        console.log('waiting for messages ....')
        const connection =
            await amqp.connect("amqp://localhost");

        channel =
            await connection.createChannel();

        const exchange =
            "order_exchange";

        const queue =
            "email_queue";

        await channel.assertExchange(
            exchange,
            "direct",
            {
                durable: true
            }
        );

        await channel.assertQueue(
            queue,
            {
                durable: true
            }
        );

        await channel.bindQueue(
            queue,
            exchange,
            "email"
        );

        channel.consume(
            queue,
            async (msg) => {

                const order =
                    JSON.parse(
                        msg.content.toString()
                    );

                console.log(
                    "Sending Email to ", order.userId, " : ",
                    order.orderId
                );

                channel.ack(msg);

            }
        );
    } catch (err) {
        channel.nack('order processing failed', false, true)
    }
};

consume();
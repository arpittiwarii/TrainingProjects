import { getChannel } from "./connection.js";

export async function publishMessage(
    exchange,
    type,
    routingKey,
    message
) {
    const channel = await getChannel();

    await channel.assertExchange(
        exchange,
        type,
        {
            durable: true
        }
    );

    channel.publish(
        exchange,
        routingKey,
        Buffer.from(JSON.stringify(message)),
        {
            persistent: true
        }
    );
}
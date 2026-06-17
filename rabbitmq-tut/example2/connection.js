import amqp from 'amqplib'

let channel;

export async function getChannel() {
    if (channel)
        return channel

    let connection = await amqp.connect("amqp://localhost")
    channel = await connection.createChannel();

    return channel

}
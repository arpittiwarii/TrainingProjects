import amqp from "amqplib";

let connection;
let channel;

export async function connectRabbitMQ() {

    if (channel) {
        return channel;
    }

    connection = await amqp.connect(
        "amqp://localhost"
    );

    channel =
        await connection.createChannel();

    return channel;
}

process.on(
    "SIGINT",
    async () => {

        await channel.close();
        await connection.close();

        process.exit(0);
    }
);
import { publishMessage } from "./producer.js";
import { getChannel } from "./connection.js";

async function createOrder() {
    const order = {
        orderId: 101,
        name: "smartphone",
        userId: 201,
        status: "purchased"
    }
    const exchange = 'order_exchange'
    const type = 'direct'
    const routingKey = 'email'
    const data = Buffer.from(JSON.stringify(order))

    await publishMessage(
        "order_exchange",
        "direct",
        "email",
        order
    );
}
createOrder()


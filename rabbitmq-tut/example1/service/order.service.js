import {
    publishOrder
}
    from "../rabbitmq/producer.js";

export async function createOrder() {

    const order = {
        id: 101,
        amount: 5000
    };
    console.log('Order creatig.')
    await publishOrder(order);

    return order;
}

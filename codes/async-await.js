// function getUser(callback) {
//     setTimeout(() => {
//         callback({ id: 1 });
//     }, 1000);
// }

// function getOrders(userId, callback) {
//     setTimeout(() => {
//         callback(["Order1", "Order2"]);
//     }, 1000);
// }

// function getPayment(order, callback) {
//     setTimeout(() => {
//         callback("Paid");
//     }, 1000);
// }

// getUser((user) => {
//     getOrders(user.id, (orders) => {
//         getPayment(orders[0], (status) => {
//             console.log(status);
//         });
//     });
// });


// Problem
// Nested callbacks
// Hard to read
// Hard to debug
// Error handling becomes messy



//solution
// function getUser() {
//     return Promise.resolve({ id: 1 });
// }

// function getOrders(userId) {
//     return Promise.resolve(["Order1", "Order2"]);
// }

// function getPayment(order) {
//     return Promise.resolve("Paid");
// }

// try{
//     const [user, orders, paymentstatus] = await Promise.all([
//         getUser(),getOrders(),getPayment()
//     ])
//     console.log(user, orders, paymentstatus)
// }catch(err){
//     console.log(err)
// }

const post = async()=>{
    function getUser() {
        return Promise.resolve({ id: 1 });
    }
    
    function getOrders(userId) {
        return Promise.resolve(["Order1", "Order2"]);
    }
    
    function getPayment(order) {
        return Promise.reject("order not found, out of stock");
    }
    
    try{
        const [user, orders, paymentstatus] = await Promise.all([
            getUser(),getOrders(),getPayment()
        ])
        console.log(user, orders, paymentstatus)
    }catch(err){
        console.log(err)
    }
}
console.log(post)

// getUser()
//     .then(user => getOrders(user.id))
//     .then(orders => getPayment(orders[0]))
//     .then(status => console.log(status))
//     .catch(err => console.log(err));

// Promise chaining : Hard to read not looks structural
// Best async await 


// const local = async ()=>{
//     const user = await getUser()
//     const order = await getOrders()
//     const payment = await getPayment();
//     return payment
// }
// console.log(local())
//Problem : 
// sequential execution.


// Promise.all([
//     getUser(),
//     getOrders(),
//     getPayment()
// ]).then((payment)=>console.log(payment[2]))

// const [player, bonuses, sessions]
//   = await Promise.all([
//     Player.findByPk(id),
//     Bonus.findAll(
//       {where: {player_id: id}}
//     ),
//     Session.findAll(
//       {where: {player_id: id}}
//     )
//   ])




// executes symultaneously require less time.
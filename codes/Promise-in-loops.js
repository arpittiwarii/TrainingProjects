// players = ["A", "B", "C"];

// function creditBonus(p){
//     return Promise.resolve(`player ${p}`)
// }
// players.forEach(async (player) => {
//     const result = await creditBonus(player);
//     console.log(result)
// });
// console.log("Completed");    

// function getPlayer() {
//     return {
//         id: 1
//     };
// }

function getPlayer() {
    return {
        id: 1
    };
}
// async function getPlayer() {
//     return {
//         id: 1
//     };
// }
console.log(Promise.resolve(getPlayer()))

// Promise.resolve() is used to return resolve promise through which we can start the promise chaining.
// It is used to convert normal value in promise. but .then() function after Promise.resolve recieves that Promise as normal value.
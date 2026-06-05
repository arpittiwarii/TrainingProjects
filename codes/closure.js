// function createCounter() {

//     let count = 0;

//     return function () {
//         count++;
//         console.log(count);
//     };
// }
// const counter = createCounter();

// counter();
// counter();
// counter();

output : 
1
2
3


function wallet(){
    let balance = 0;

    console.log(balance)
    console.log(typeof(balance))
    return{
        getBalance(){
            return balance
        },
        deposit(amount){
            if(balance >= 0 && typeof(balance) === 'number')
                return balance+=amount
        }
    }
}
const user = wallet()


console.log(user.deposit(100))
console.log(user.getBalance())
console.log(user.deposit(1000))
console.log(user.getBalance())

// Why Do We Need Error Handling?

// Imagine a casino platform.

// Player clicks:

// Withdraw ₹10,000

// Possible failures:

// Insufficient balance
// Player not found
// Database down
// Payment gateway timeout
// Developer bug

// Without proper error handling:

// Application crashes
// Sensitive information leaks
// Inconsistent API responses
// Impossible debugging    ``
/*
1. Operational Errors

Expected errors.

Examples:

Invalid password
Player not found
Insufficient balance
Invalid JWT
Payment gateway unavailable

2. Programming Errors

Developer mistakes.

Examples:

undefined.name
player.balance.toUpperCase()
JSON.parse("invalid json")

These indicate bugs in the code.

Production Architecture
Request
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Error occurs
   ↓
next(err)
   ↓
Global Error Middleware
   ↓
Logger
   ↓
Response
*/

// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divide by zero");
//     }

//     return a / b;
// }

// try {
//     console.log(divide(10, 0));
// } catch (error) {
//     console.error(error.message);
// }

// function checkAge(age) {
//     if (typeof age !== "number") {
//         throw new Error("Age must be a number");
//     }

//     return "Valid";
// }

// try {
//     console.log(checkAge("20"));
// } catch (error) {
//     console.error(error.message);
// }

// function fetchUser() {
//     return Promise.reject(new Error("Database connection failed"));
// }

// fetchUser()
//     .then(data => console.log(data))
//     .catch(error => {
//         console.error(error.message);
// });

async function getUser() {
    throw new Error("User not found");
}

async function main() {
    try {
        const user = await getUser();

        console.log(user);
    } catch (error) {
        console.error(error.message);
    }
}

main();
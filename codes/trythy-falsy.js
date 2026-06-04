// Junior Code
function processPlayers(players) {
    if (players) {
        return "Processing Players";
    }
}

console.log(processPlayers([]));

// Problem :- 
// [] is truthy.
// Output: Processing Players . even the array is empty but it is truthy value.

// Optimmized code : 
function processPlayers(players) {
    if (Array.isArray(players) && players.length > 0) {
        return "Processing Players";
    }

    return "No Players Found";
}

console.log(processPlayers([]));
// Output: Processing Players. if the player is actually existing otherwise give user friendly message.
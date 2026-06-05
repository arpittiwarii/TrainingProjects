// Closures, Scope & the Module Pattern

const playerName = "Arpit";

function showPlayer() {
    function inner(){
        console.log(playerName);
    }   
    inner()
}

showPlayer();
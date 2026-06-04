players = ["A", "B", "C"];

function creditBonus(p){
    return Promise.resolve(`player ${p}`)
}
players.forEach(async (player) => {
    const result = await creditBonus(player);
    console.log(result)
});
  
console.log("Completed");
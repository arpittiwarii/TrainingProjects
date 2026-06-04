console.log("A");

setTimeout(() => {
    console.log("B");

    process.nextTick(() => {
        console.log("C");
    });

    Promise.resolve().then(() => {
        console.log("D");

        process.nextTick(() => {
            console.log("E");
        });
    });

}, 0);

setImmediate(() => {
    console.log("F");

    Promise.resolve().then(() => {
        console.log("G");
    });
});

Promise.resolve().then(() => {
    console.log("H");

    setTimeout(() => {
        console.log("I");
    }, 0);

    setImmediate(() => {
        console.log("J");
    });

    process.nextTick(() => {
        console.log("K");
    });
});

process.nextTick(() => {
    console.log("L");

    Promise.resolve().then(() => {
        console.log("M");
    });

    process.nextTick(() => {
        console.log("N");
    });
});

console.log("O");

// output :- 
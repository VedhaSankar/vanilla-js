function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        // let i = "block scope";
        console.log("Block scope of i is", i);
    }
    console.log("Function scope of i is: ", i);
    return i;
}
checkScope();
console.log("broo");
let js = "vanilla"
// alert("hello")


var myArray = [1, 2, 3]
myArray.push(23)
myArray.pop(); // pop at the end
myArray.shift() // removes and returns item at the beginnning of hte array
myArray.push([2.4, 5])

console.log(myArray)

myArray.unshift(233)
console.log(myArray)

function helloWorld() {
    console.log("Hello world");
}

helloWorld();

function params(a, b) {
    console.log(a + b)
}

params(2, 3)

// == -> not that strict; doesn't check the type 
// === -> strict equals; checks the type of the value as well
// !== -> strict inequality 


function testLogical(val) {
    if (val >= 10 && val < 25) {
        console.log(val);
    }
    else {
        console.log("Invalid")
    }
}

testLogical(45);

var testObj = {
    "color": "green",
    "name": "quincy"
}

console.log(testObj.color)
console.log(testObj["color"])


let s = "name"

console.log(testObj[s])

testObj.name = "guppy"

console.log(testObj)



// let allows you to declare only once
// var allows you to declare multiple times
// const cant change

// strict checking
"use strict"

// if const is declared as array or object, we can still change it. use freeze instead

function freezeObj() {

    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    }
    catch (ex) {
        console.log(ex);
    }

    return MATH_CONSTANTS.PI;

}

const PI = freezeObj();

// strict mode: allows you to catch common coding mistakes

// var: declared globally or in a block
// let: only in a block
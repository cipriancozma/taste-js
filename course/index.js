// JavaScript
// 1. Variables and Data types
const name = "Ciprian";
let motto = "Practice";
var isMarried = true; // var usage is good to be avoided

// Data types
// Primitive Types -> number, string, boolean, undefined, null, bigint, symbol
// Reference Types -> array, function, object

// to check the type of the variable -> typeof

// 2. Data conversion
let a = "16";
let b = 8;
// console.log(typeof a);
// console.log(typeof b);
// console.log(a + b); // implicit conversion

//explicit conversion using parseInt, parseFloat, Number
a = parseInt("8");
b = parseFloat("2.5");
// console.log(a + b);

// conversion to string using String() or toString()
let rez = String(123);
// console.log(rez, typeof rez);

//conversion to boolean
let result = Boolean("");
// console.log(result, typeof result);

// 3. How to work with numbers
let num = 12.1234567;
// toFixed()
// console.log(num.toFixed(3));
// Math
// console.log(Math.PI, Math.E);
// abs
// console.log(Math.abs(12.3), Math.abs(-6.3));
//ceil
// console.log(Math.ceil(12.3), Math.ceil(14.67));
// floor
// console.log(Math.floor(6.89));
// exp
// console.log(Math.exp(2));
// pow
// console.log(Math.pow(2, 3));
// sqrt
// console.log(Math.sqrt(4));
// round
// console.log(Math.round(6.33));
// random
let min = 1;
let max = 10;
// console.log(min + Math.floor(Math.random() * 10));

//4. Strings
let firstName = "Ciprian";
let lastName = "Cozma";
let completed = firstName + " " + lastName;
// console.log(firstName + " " + lastName);
// console.log(completed.length);
// console.log(completed.substring(0, 4));
// console.log(completed.indexOf("i") > -1); // if the char is not presented it returns -1, else it returns the index of the char
// console.log(completed.includes("ipr"));
let phrase = "something, unusual, here";
let newPhrase = phrase.replace("some", "xyz");
// console.log(newPhrase);
// console.log(completed.split(" "));
let val = "    helllloooo  ";
// console.log(val, val.trim(), val.trim().length);

// 5. Arrays

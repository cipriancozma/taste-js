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
const numbers = [1, 2, 3, 4];

numbers.push(20); // add an element at the end of the array
numbers.unshift(100); // add an element at the beginning of the array
numbers.pop(); // removes an element from the end of the array
numbers.shift(); // removes an element from the beginning of the array
// console.log(numbers);

//indexOf()
let pos = numbers.indexOf(3);
// console.log(pos);

//splice - removes an element from array based on the position
let removedElements = numbers.splice(1, 3);
// console.log(removedElements);

// join()
let arr = ["one", "two", "three"];
// console.log(arr.join(", "));

// reverse()
// console.log(arr.reverse());

// 6. Date object
let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getDate());

// 7. Object literals
let person = {
  name: "Ciprian",
  lastName: "Czm",
  age: 30,
  isMarried: true,
};

let person2 = {
  name: "Ciprian",
  lastName: "Czm",
  age: 30,
  isMarried: true,
};

// console.log(person == person2);
let person3 = person;
// console.log(person == person3);
person.age = 20;
// console.log(`age person: ${person.age}, age person3: ${person3.age}`); // same object, points to the same reference in the heap memory

// 8. IF ELSE
let responses = ["yes", "no", "of course", "without doubt", "no, no chance"];

// let question = prompt("The question is? ");
// if (question) {
//   let randomResponse = Math.floor(Math.random() * 5);
//   console.log(`The response is: ${responses[randomResponse]}`);
// } else {
//   console.log("You have cancel it.");
// }

// 9. SWITCH
// let fruit = prompt("Introduce a fruit: ");
// switch (fruit) {
//   case "apple":
//     console.log("You have introduced apple");
//     break;

//   case "pineapple":
//     console.log("You have introduced pineapple");
//     break;

//   case "strawberry":
//     console.log("You have introduced strawberry");
//     break;

//   default:
//     console.log(`We do not have ${fruit} in the menu`);
// }

// 10. FOR
let maxArr = [-2, 5, 3, 7, 4];
let maximum = maxArr[0];

for (let i = 0; i < maxArr.length; i++) {
  if (maxArr[i] > maximum) {
    maximum = maxArr[i];
  }
}

// console.log("Max: ", maximum);

// 11. WHILE
// let i = 0;
// while (i < 12) {
//   console.log("Ciprian" + i);
//   i++;
// }

// let i = 0;
// do {
//   i = i + 1;
//   console.log(i);
// } while (i < 3);

// 12. FUNCTIONS

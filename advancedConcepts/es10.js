// flat

const arr = [1, [2, 3], [[4, 5]]];

console.log(arr.flat(2));

// flat is also used to clean up the data
const entries = ["bob", "sally", , , , , , "cindy"];

console.log(entries.flat());

// flatMap
const doubledArray = arr.flat(2).flatMap((num) => num * 2);
console.log(doubledArray);

const userEmail = "       eddy@gmail.com    ";
console.log(userEmail.trimStart());
console.log(userEmail.trimEnd());
console.log(userEmail.trim());

// fromEntries
const userProfiles = [
  ["commanderTom", 23],
  ["derekZlander", 40],
  ["hansel", 14],
];
const newObj = Object.fromEntries(userProfiles);

console.log(newObj);

// try catch block
// allows us to try a piece of code and if there is an error to catch it

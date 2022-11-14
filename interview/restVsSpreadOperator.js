// rest
function sum(...numbers) {
  console.log(numbers);
}

sum(4, 5); // array of numbers
sum(5, 7, 9, 12);

// spread
let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr, 6, 7, 8]; // spread the array into single values

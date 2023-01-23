// create a function that reverses a string
// 'Hi my name is Ciprian' should be reversed

// my solution
// function reverse(str) {
//   const strToArray = str.split("");
//   let reversedStr = "";

//   for (let i = strToArray.length - 1; i >= 0; i--) {
//     reversedStr += strToArray[i];
//   }

//   return reversedStr;
// }

// console.log(reverse("Hi my name is Ciprian"));

// solution provided
function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "try again!";
  }
  const backwards = [];
  const length = str.length - 1;
  for (let i = length; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

console.log(reverse("Hi my name is Ciprian"));

// solution provided
function reverse2(str) {
  return str.split("").reverse().join("");
}

console.log(reverse2("Hi my name is Ciprian"));

// solution provided
const reverse3 = (str) => [...str].reverse().join("");
console.log(reverse3("Hi my name is Ciprian"));

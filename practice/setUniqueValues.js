// using Set Data Structure

// const unique = (str) => {
//   let tempStr = new Set();
//   for (let letter of str) {
//     if (tempStr.has(letter)) {
//       return false;
//     }
//     tempStr.add(letter);
//   }

//   return true;
// };

const unique = (str) => {
  return new Set(str).size === str.length;
};

console.log(unique("abcde")); // true
console.log(unique("abacdefb")); //false

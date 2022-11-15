// return true only if all values are unique, otherwise false
// using Array, Object, string method lastIndexOf()
// no Set Data Structure

const unique = (str) => {
  let values = [];

  for (let letter of str) {
    if (values.indexOf(letter) !== -1) {
      return false;
    }
    values = [...values, letter];
  }
  console.log(values);
  return true;
};

console.log(unique("abcde")); // true
console.log(unique("abacdefb")); //false

const uniqueWithIdx = (str) => {
  for (let i = 0; i < str.length; i++) {
    // console.log(str.lastIndexOf(str[i]));
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
};

console.log(uniqueWithIdx("abcde")); // true
console.log(uniqueWithIdx("abacdefb")); // false

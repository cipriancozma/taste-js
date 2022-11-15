function arraySum(arr) {
  let maxNum = Math.max(...arr);
  let idx = arr.indexOf(maxNum);
  let el = arr.splice(idx, 1)[0];
  let sum = arr.reduce((acc, num) => {
    return acc + num;
  }, 0);

  if (sum === el) {
    console.log(`${sum} == ${el}`);
    return true;
  } else {
    console.log(`${sum} != ${el}`);
    return false;
  }
}

console.log(arraySum([1, 2, 4, 6, 13])); // 13
// return true 1+2+4+6 = 13
console.log(arraySum([1, 2, 4, 34, 22]));
// return false 1+2+4+22=29 29!=34

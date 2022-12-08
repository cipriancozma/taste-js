function secondValue(arr) {
  let tempArr = [...new Set(arr)].sort((a, b) => a - b);

  return tempArr;
}

console.log(secondValue([1])); // 1
console.log(secondValue([4, 2])); // 2, 4
console.log(secondValue([11, 44, 22])); // 11, 22, 44 === 22
console.log(secondValue([3, 2, 88, 3, -11, 67, 7])); // -11, 2, 3, 7, 67, 88 ==== 2,67

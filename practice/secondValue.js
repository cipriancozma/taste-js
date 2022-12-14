function secondValue(arr) {
  let tempArr = [...new Set(arr)].sort((a, b) => a - b);
  if (tempArr.length < 2) {
    return `${tempArr}`;
  } else if (tempArr.length === 2) {
    return `${tempArr[0]},${tempArr[1]}`;
  } else {
    return `${tempArr[1]},${tempArr[tempArr.length - 2]}`;
  }
}

console.log(secondValue([1])); // 1
console.log(secondValue([4, 2])); // 2, 4
console.log(secondValue([11, 44, 22])); // 11, 22, 44 === 22
console.log(secondValue([3, 2, 88, 3, -11, 67, 7])); // -11, 2, 3, 7, 67, 88 ==== 2,67

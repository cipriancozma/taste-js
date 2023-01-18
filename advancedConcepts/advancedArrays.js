let arr = [1, 2, 10, 16];

const double = [];
const newArr = arr.forEach((num) => {
  double.push(num * 2);
});

// console.log(double);

// map, filter, reduce
const mappedArr = arr.map((num) => {
  return num * 2;
});

// console.log(mappedArr);

// filter
const filteredArr = arr.filter((num) => {
  return num > 5;
});

// console.log(filteredArr);

// reduce
const sumArr = arr.reduce((acc, el) => {
  return acc + el;
}, 0);

// console.log(sumArr);

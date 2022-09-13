// array from - not on prototype
// from returns array object from an object
// turns array like into array string, nodeList, Set
const udemy = "udemy";
// console.log(Array.from(udemy));

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});
const itemsPerPage = 10;
const pages = Math.ceil(items.length / itemsPerPage);
const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  console.log(start);
  const temp = items.slice(start, start + itemsPerPage);
  return temp;
});
console.log(newItems);

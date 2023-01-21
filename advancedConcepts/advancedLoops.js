const basket = ["apples", "oranges", "grapes"];

// 1
// for (let i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// 2
// basket.forEach((item) => {
//   console.log(item);
// });

// for of
// iterating - arrays, strings
// for (item of basket) {
//   console.log(item);
// }

// for in - works with objects
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 100,
};

// enumerating - properties
for (const item in detailedBasket) {
  console.log(item, detailedBasket[item]);
}

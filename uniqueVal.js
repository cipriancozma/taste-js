const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "lunch",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
];

const categories = [...new Set(menu.map((item) => item.category))];
console.log(categories);

// iterates, callback function
// reduces to a single value, number, array, object
// 1st parameter 'acc' - total of all calculations
// 2nd parameter 'curr' - current iteration/ value

const staff = [
  { name: "bob", age: 20, salary: 100 },
  { name: "susy", age: 27, salary: 300 },
  { name: "peter", age: 22, salary: 400 },
  { name: "anna", age: 29, salary: 50 },
];

const totalSalaries = staff.reduce((acc, person) => {
  return acc + person.salary;
}, 0);

// console.log(totalSalaries);

// example 2
const cart = [
  {
    title: "Samsung Galaxy",
    price: 599.99,
    amount: 1,
  },
  {
    title: "Google Pixel",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

let total = cart.reduce(
  (acc, item) => {
    const { amount, price } = item;
    acc.totalItems += amount;
    acc.cartTotal += price * amount;
    return acc;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

// console.log(total);

const url = "https://api.github.com/users/cipriancozma/repos?per_page=100";

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const newData = data.reduce((total, repo) => {
    const { language } = repo;
    if (language) {
      total[language] = total[language] + 1 || 1;
    }

    return total;
  }, {});
  console.log(newData);
};

fetchRepos();

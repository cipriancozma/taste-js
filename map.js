const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 22,
    position: "designer",
  },
  {
    name: "susy",
    age: 28,
    position: "devops",
  },
];

// return a new array
// doesn't change the original array
const ages = people.map((el, idx) => {
  return el.age;
});

// console.log(ages);

const names = people.map((item) => {
  return `<h2>${item.name}</h2>`;
});

// let displayedResults = document.querySelector("#result");
// displayedResults.innerHTML = names.join("");

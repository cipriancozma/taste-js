// dot notation
const person = {
  name: "John",
};

// console.log(person.name);
// console.log(person);

//square bracket notation
const items = {
  "featured-items": ["item1", "item2"],
};

// console.log(items["featured-items"]);

let appState = "loading";
const app = {
  [appState]: true,
};

console.log(app);

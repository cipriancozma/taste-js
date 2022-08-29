const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "intern" },
];

// filter -> returns a new array based on condition
// find -> returns single instance, returns first match, if no match - undefined

const young = people.filter((person) => person.age <= 25);
console.log(young);

const developer = people.find((person) => person.position == "developer");
console.log(developer);

const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

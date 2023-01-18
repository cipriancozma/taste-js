// let + const -> both are block scoped
// const cannot be reassigned, instead of let that can be.

// Destrucuring
const obj = {
  player: "Bobby",
  experience: 100,
  wizardLevel: false,
};

// const player = obj.player;
// const experience = obj.experience;
// const wizardLevel = obj.wizardLevel;
// - this below can be used instead of the piece of code above

const { player, experience, wizardLevel } = obj;

// Object properties
const name = "john smith";
const obj2 = {
  [name]: "hello",
};

// console.log(obj2);

// Template strings
const firstName = "Ciprian";
const greeting = `Hello, how are you ${firstName}`;
// console.log(greeting);

// Default Arguments
function greet(name = "", pet = "cat") {
  return `Hello ${name} you seem to be a ${pet}`;
}

// console.log(greet("Napoleon"));

// Symbol
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
// if we want to compare these two syms, we will have false, even if they seem to be equal

// Arrow Functions
const add = (a, b) => a + b;

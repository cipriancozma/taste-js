// BigInt
// BigInt is a new type in JS
console.log(typeof 1n);

// Nullish Coalescing Operator ??

// Optional Chaining Operator ?
let pokemon = {
  pickachu: {
    species: "Mouse",
    height: 0.4,
    weight: 6,
    power: 0, // ?? verifies if power is null or undefined
  },
};

let weight = pokemon?.pickachu?.weight;
let power = pokemon?.pickachu?.power ?? "no power";
console.log(weight);
console.log(power);

// globalThis
globalThis === window;
// globalThis works outside the browser

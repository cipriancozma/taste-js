// inline scripts

// script tags

// IIFE
// - imediately invoked function execution
(function () {
  console.log("HELLO");
})();

// CommonJS + Browserify
// js1
// module.exports = function add(a, b) {
//     return a + b;
// }

// js2
// let add = require("./add");

// ES6 + Webpack
// js1
export const add = (a, b) => a + b;
export default function add(a, b) {
  return a + b;
}

// js2
import add from "./add";
import { add } from "./add";

// Webpack is a module bundler

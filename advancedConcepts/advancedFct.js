function first() {
  let greet = "hi"; // first will not have access to the variable name
  function second() {
    const name = "Bobby";
    alert(greet);
  }
  return second;
}

let newFunc = first();
// newFunc();

// Closures
// child scope always has access to the parent scope
// a function ran, the function is executed, it's never going to execute again, but it's going to remember that there are references to those variables

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

// console.log(curriedMultiply(3)(5)); // this function thakes one arguments at a time

const multiplyBy10 = curriedMultiply(10);
// console.log(multiplyBy10(5));

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

const comp = compose(sum, sum)(5);
console.log(comp);

// Avoiding side effects in order to write good programs

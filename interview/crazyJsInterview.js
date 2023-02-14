// Closures
function outer(b) {
  function inner() {
    console.log(a, b);
  }
  let a = 10;

  return inner;
}
let a = 20;

// outer("HELLO")(); // for calling the inner function

// Advantages of closures - used in function currying, helps in data hiding and encapsulation

// Data privacy using closures
function counter() {
  let count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}

let counter1 = counter();
// counter1();
// counter1();

let counter2 = counter();
// counter2();

function Counter() {
  let count = 0;

  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

let counter3 = new Counter();
counter3.incrementCounter();
counter3.incrementCounter();
counter3.decrementCounter();

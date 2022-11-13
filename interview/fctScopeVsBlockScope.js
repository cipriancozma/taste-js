function a() {
  let x = 10;
}

function b() {
  console.log(x); // x is not defined, because it can't be accesed from function a, scope of x is local to function a
}

a();
b();
// if you declare variable with "var" keyword then "hoisting" will be there

let x = 10;
function a() {
  x += 5;
}

function b() {
  console.log(x); // x equals to 15 because both functions have access to the global variable x
}

a();
b();

console.log(z); // undefined
var z = 10;

// hoisting means that it moves the declaration to top

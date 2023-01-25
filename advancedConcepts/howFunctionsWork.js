var x = 1;
a(); // 10
b(); // 1000
console.log(x); // 1

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 1000;
  console.log(x);
}

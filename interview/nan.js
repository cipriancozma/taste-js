let a = 5;
let b = "value";
console.log(a * b); // NaN

if (!isNaN(a * b)) {
  console.log("VALID");
} else {
  console.log("INVALID");
}

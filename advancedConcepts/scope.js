// scope means variable access

let fun = 5;

function funFunction() {
  // child scope
  let fun = "hello";
  console.log(1, fun);
}

function funerFunction() {
  // child scope
  let fun = "Byeee";
  console.log(2, fun);
}

function funestFunction() {
  // child scope
  fun = "AHHHH";
  console.log(3, fun);
}

console.log("window", fun);
funFunction();
funerFunction();
funestFunction();
console.log("windowAgain", fun);

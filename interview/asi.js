console.log("HIII");
console.log("TEST");

// JS inserts a semicolon a the end of line

function test() {
  return; // automatically inserts here a semicolon which means that this returning will be undefined
  {
    a: 5;
  }
}

function test() {
  return {
    // here it will be returned the object literal
    a: 5,
  };
}

test();

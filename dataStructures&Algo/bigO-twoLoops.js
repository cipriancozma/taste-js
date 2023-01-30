function logItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}

logItems(3);
// This is an O(2n) operation
// Drop constants
// This will be then an O(n) operation

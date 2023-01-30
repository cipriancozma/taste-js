function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// logItems(10);
// This will be O(n^2)

function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        console.log(i, j, j);
      }
    }
  }
}

logItems(10);
// This will be O(n^3) -> This will become O(n^2)

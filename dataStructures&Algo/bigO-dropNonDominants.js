function logItems(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j); // This part will be O(n^2)
    }
  }

  for (let k = 0; k < n; k++) {
    console.log(k); // This part will be O(n)
  }
}

logItems(10); // The both of them will become O(n^2 + n) -> the non dominant will be removed -> O(n^2)

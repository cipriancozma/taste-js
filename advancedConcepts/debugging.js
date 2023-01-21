const flattened = [
  [1, 2],
  [2, 3],
  [4, 5],
].reduce((acc, arr) => {
  debugger;
  return acc.concat(arr);
}, []);

const mathSequences = (arr) => {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let arithNumber = arr[i] - arr[i - 1];
    arith.add(arithNumber);
    let geoNumber = arr[i] / arr[i - 1];
    geo.add(geoNumber);
  }

  if (arith.size === 1) {
    return "Arithmetic";
  }

  if (geo.size === 1) {
    return "Geometric";
  }

  return -1;
};

console.log(mathSequences([2, 4, 6, 8])); // "Arithmetic"
console.log(mathSequences([3, 9, 27])); // "Geometric"
console.log(mathSequences([2, 5, 14, 89])); // -1

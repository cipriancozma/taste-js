// * Filter out strings and numbers above 3 from array
//  * Ex: ["A", "4", 5, 1, "M", 235, “2”] => [ 1,  “2”]

function filterArr(arr) {
  return arr.filter((item) => item < 3);
}

console.log(filterArr(["A", "4", 5, 1, "M", 235, "2"]));

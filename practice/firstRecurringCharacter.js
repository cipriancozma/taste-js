// Google question
// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// it should return 2

// Given an array [2, 1, 1, 2, 3, 5, 1, 2, 4]
// it should return 1

// Given an array [2, 3, 4, 5]
// it should return undefined

// this solution is O(n^2)
// function firstRecurringCharacter(array) {
//   for (let i = 0; i <= array.length; i++) {
//     for (let j = i + 1; j <= array.length; j++) {
//       if (array[i] === array[j]) {
//         return array[i];
//       }
//     }
//   }
//   return undefined;
// }

// version 2 -> way fester than the first version O(n)
function firstRecurringCharacter(array) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) {
      return array[i];
    } else {
      map[array[i]] = i;
    }
  }
  console.log(map);
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));

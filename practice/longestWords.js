const longestWords = (phrase) => {
  let wordsArr = phrase.split(" ");
  let sortedArr = wordsArr.sort((a, b) => b.length - a.length);
  let max = sortedArr[0];
  let longestWordsArr = [];

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i].length === max.length) {
      longestWordsArr.push(sortedArr[i]);
    }
    longestWordsArr.push(max);
  }
  return [...new Set(longestWordsArr)];
};

console.log(longestWords("I woke up early today"));
console.log(longestWords("I want straight to the beach"));

const longestWord = (phrase) => {
  const words = phrase.split(" ");
  let longestWord = "";

  words.map((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
};

console.log(longestWord("I woke up early today"));
console.log(longestWord("I want straight to the beach"));

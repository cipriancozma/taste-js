const capitalizeFirstLetter = (arr) => {
  return arr
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log(capitalizeFirstLetter("I woke up early today"));
console.log(capitalizeFirstLetter("I want straight to the beach"));

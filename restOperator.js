// rest operator -> gathers / collects items
// rest when declare function, spread when invoke the function

// arrays
const fruits = ["apple", "orange", "lemon", "banana"];
// const [first, second, ...rest] = fruits;
// console.log(first, second, rest);

// objects
const person = { name: "john", lastName: "smith", job: "dev" };
const { name, ...rest } = person;
console.log(name, rest);

// functions
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);

  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

const testScores = [4, 5, 90, 24];
getAverage(person.name, ...testScores);

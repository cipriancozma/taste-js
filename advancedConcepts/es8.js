// string padding
console.log("Turtle".padStart(10));
console.log("Turtle".padEnd(10));

let obj = {
  username0: "Santa",
  username1: "Rudof",
  username2: "Grinch",
};

Object.keys(obj).map((item) => console.log(item, obj[item]));

Object.values(obj).map((value) => console.log(value));

Object.entries(obj).map((entry) => console.log(entry));

const newObj = Object.entries(obj).map((item) => {
  return `${item[1]} - ${item[0].replace("username", "")}`;
});

console.log(newObj);

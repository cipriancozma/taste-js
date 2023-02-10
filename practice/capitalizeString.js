function capitalizeString(str) {
  return str
    .split(" ")
    .map((item) => {
      return item[0].toUpperCase() + item.slice(1);
    })
    .join(" ");
}

console.log(capitalizeString("ana"));
console.log(capitalizeString("ana are mere"));

function convertStringToInteger(str) {
  const value = parseInt(str);
  if (isNaN(value)) {
    return "String cannot be converted to Number";
  }
  return value;
}

console.log(convertStringToInteger("123"));
console.log(convertStringToInteger("asda"));
console.log(convertStringToInteger("7"));

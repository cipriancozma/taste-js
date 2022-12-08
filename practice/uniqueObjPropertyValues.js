let products = [
  {
    title: "Iphone 13",
    company: "Apple",
  },
  {
    title: "Galaxy",
    company: "Samsung",
  },
  {
    title: "Iphone 7",
    company: "Apple",
  },
  {
    title: "HTC Phone",
    company: "HTC",
  },
  {
    title: "Iphone XS",
    company: "Apple",
  },
];

function getUnique(arr) {
  const tempArr = arr.map((item) => item.company);
  return [...new Set(tempArr)];
}

console.log(getUnique(products));

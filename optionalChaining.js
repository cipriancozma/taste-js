const people = [
  {
    name: "bob",
    location: { street: "123 main street " },
    timezone: { offset: "7:00" },
  },
  {
    name: "peter",
    location: { street: "123 peter street " },
  },
  {
    name: "peter",
    location: { street: "123 peter street " },
    timezone: { offset: "9:00" },
  },
];

const result = people.map((item) => {
  return item?.timezone?.offset || "No result";
});

console.log(result);

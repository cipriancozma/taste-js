const bob = {
  first: "bob",
  last: "sanders",
  city: "iasi",
  siblings: {
    sister: "jane",
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);

const {
  first: firstName,
  last,
  city,
  siblings: { sister },
} = bob;
// console.log(firstName, last, city, sister);

const printPerson = (person) => {
  const { first, last } = person;
  console.log(first, last);
};

printPerson(bob);

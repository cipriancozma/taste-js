// spread operator
// allows and iterable to spread/expand individually inside receiver
// split into single items and copy them

const udemy = "udemy";
const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

const letters = [...udemy];
console.log(letters);

const friendsArr = [...boys, ...girls, bestFriend];
console.log(friendsArr);

// reference -> copy
const newFriends = [...friendsArr];
newFriends[0] = "ciprian";
console.log(newFriends);
console.log(friendsArr);

// objects
const person = { name: "John", job: "developer" };

const newPerson = { ...person };
newPerson.name = "ciprian";

console.log(person);
console.log(newPerson);

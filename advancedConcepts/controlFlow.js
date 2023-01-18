// ternary operator

const isUserValid = (bool) => {
  return bool;
};

let answer = isUserValid(true)
  ? console.log("You may enter")
  : console.log("Access Denied");

// switch
function moveCommand(direction) {
  let whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you found a river";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

console.log(moveCommand("left"));

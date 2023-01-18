// reference type
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 === object2); // true
console.log(object1 === object3); // false

// context
// context says where we are within the object
const object4 = {
  a: function () {
    console.log(this);
  },
};

object4.a();

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}, I am ${this.type}`);
  }
}

const player1 = new Player("Ciprian", "engineer");
player1.introduce();

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`WHEEEEEE, I am a ${this.type}`);
  }
}

const wizard1 = new Wizard("Ciprian", "developer");
wizard1.play();
wizard1.introduce();

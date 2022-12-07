// The four pillars of OOP
class Person {
  constructor(name, age) {
    this._name = name; // _ makes it a private variable
    this.age = age;
  }

  getName() {
    return `This is ${this.name}`;
  }

  getAge() {
    return this.age;
  }

  setName(name) {
    this.name = name;
  }
}

const firstPerson = new Person("Ciprian", 30);
// console.log(firstPerson.getName());

class House {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }

  getAddress() {
    return this.address;
  }

  getPrice() {
    return this.price;
  }

  getResidents() {
    return this.residents;
  }

  addResidents(resident) {
    this.residents.push(resident);
    return this.residents;
  }
}

const Pedro = new Person("Pedro", 20);
const David = new Person("David", 24);
const house = new House("address", 442, [Pedro, David]);

// console.log(house.getResidents());
const Ciprian = new Person("Ciprian", 30);
house.addResidents(Ciprian);
console.log(house.getResidents());

// Abstraction
// No need to see a specific piece of code in order to do a specific task

// Encapsulation
// Make the code encapsulated and you cannot change a specific thing

// Inheritance
class Programmer extends Person {
  constructor(name, age, company, salary, language) {
    super(name, age);
    this.company = company;
    this.salary = salary;
    this.language = language;
  }

  sayHi = () => {
    console.log(
      `Hello, I am a programmer! I am ${this.getAge()} years old and I work for ${
        this.company
      }.`
    );
  };
}

let programmer = new Programmer("Ciprian", 20, "Google", 100, "JS");
// programmer.sayHi();

// Polymorphism
// literaly means that something can take many forms

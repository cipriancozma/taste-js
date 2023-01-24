const strings = ["a", "b", "c", "d"];
// 4 x 4 = 16 bytes of storage

// push
strings.push("e"); // O(1)

// console.log(strings);

// pop
strings.pop(); // O(1)

// console.log(strings);

// unshift
strings.unshift("x"); // O(n)
// console.log(strings);

// splice
strings.splice(2, 0, "alien"); // O(n/2) we moved only a part of the array
// console.log(strings);

// Implementing an Array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const newArr = new MyArray();
// console.log(newArr.get(0));
// console.log(newArr.push(2));
// console.log(newArr.push(4));
// console.log(newArr.pop());

// console.log(newArr);

// Hash Tables Introduction -> see the hashtables exercise from practice folder

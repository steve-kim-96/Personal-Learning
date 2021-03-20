// Symbol.iterator
// Iterables are objects that implement the Symbol.iterator method
// Array likes are objects that have indexes and length, so they look like arrays

// iterating over min max values defined in an object
let range = {
  from: 3,
  to: 10,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// for (let num of range) // console.log(num)

// iterating over a string
const string = 'hello world'

for (let char of string) // console.log(char)

// Symbol iterator with string
const stringy = 'Hello World'

let iterator = stringy[Symbol.iterator]();

while (true) {
  let result = iterator.next()
  if (result.done) break;
  return result.value
};

// Array.from method => takes an iterable or array-like object and makes a "real" Array from it

let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};

const realArray = Array.from(arrayLike)

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

const realArray2 = Array.from(range)

// Array destructuring

const arr = ["John", "Doe"];

const [firstName, lastName] = arr

const [first, last] = "John Smith".split(' ')

// Skipping elements using commas
// This one is pretty fun but I don't see the use case for this
const [, , title, where] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// Use it with any iterable
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// Assign to anything at the left-side

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

// Looping with .entries

const john = {
  name: 'John',
  age: 30
};

for (let [key, value] of Object.entries(john)) {
  // console.log(`${key}: ${value}`)
}

// Swap values trick
// WHAAAAAAAA
let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest]

// The rest of them 
// Also, WHAAAAAAAAA

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// Seems like rest is an array that contains the rest of the values not assigned

// console.log(rest[0])
// console.log(rest[1])

// default values
const [defName = "John", defLast = "Doe"] = ["Julius"]

// Object destructuring

// ...rest pattern 

const options = {
  menu: 'Menu',
  height: 200,
  width: 300
}

// const { menu, ...rest } = options

// Return the person with highest salary
// When it is a task to compare values, make sure you somehow save each value to a variable and return the value when the condition of lowest is no longer met

const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function highestSalary (object) {
  let result = 0;
  let resultName = null
  for (const [name, salary] of Object.entries(salaries)) {
    if (result < salary) {
      result = salary
      resultName = name
    }
    return resultName
  }

};

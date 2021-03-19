// using an object as a filter and passing thisArg

const army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age <= this.maxAge
  }
}

let users = [
  { name: 'simon', age: 16 },
  { name: 'eggsy', age: 20 },
  { name: 'roxy', age: 23 },
  { name: 'galahad', age: 30 }
];

// both methods work the same way but the latter syntax is more popular
// const soldiers = users.filter(army.canJoin, army)
const soldiers = users.filter(user => army.canJoin(user))

console.log(soldiers)

/*
  Why is it I find it easier to understand the former rather than the latter?
*/
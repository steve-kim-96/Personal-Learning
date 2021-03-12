// // Declaring shape of object that is assigned "User"
interface User {
  name: string,
  id: number
}
// // Correct form of declaring object with interface defined above
const user: User = {
  name: 'Steve',
  id: 1
}
// // incorrect form of declaring object with interface defined above
// const incorrectUser: User = {
//   userName: 'Steve',
//   id: 1
// }

function getUser(user): User {
  console.log(user)
  return null
}

getUser(user)

// Let's see if optional property is printed


// function printName(obj: { first: string; last?: string }) {
//   // Error - might crash if 'obj.last' wasn't provided!
//   console.log(obj.last.toUpperCase());

//   // A safe alternative using modern JavaScript syntax:
//   console.log(obj.last?.toUpperCase());
// }

// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });

interface Anything {
  first: string,
  last?: string
}

const optional: Anything = {
  first: 'hello world'
}

console.log(optional.first)
console.log(optional.last)

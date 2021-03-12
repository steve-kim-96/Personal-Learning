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
// incorrect form of declaring object with interface defined above

// const incorrectUser: User = {
//   userName: 'Steve',
//   id: 1
// }

function getUser(user): User {
  console.log(user)
  return null
}

getUser({ name: "Steve", id: 1})

// This is narrowing

interface Props {
  string?: string,
  array?: string[]
  null?: null
}

const string: Props = {
  string: 'hello world'
}

const array: Props = {
  array: ['h', 'e', 'l', 'l', 'o']
}


function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
//                    ^ = (parameter) strs: string[]
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    //            ^ = (parameter) strs: string
    }
  }
}
const printString = printAll(string.string)
const printArray = printAll(array.array)

console.log(printArray)
console.log(printString)

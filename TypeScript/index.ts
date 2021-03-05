// Declaring shape of object that is assigned "User"
interface User {
  name: string,
  id: number
}
// Correct form of declaring object with interface defined above
const user: User = {
  name: 'Steve',
  id: 1
}
// incorrect form of declaring object with interface defined above
const incorrectUser: User = {
  userName: 'Steve',
  id: 1
}

function getUser(user): User {
  console.log(user)
  return null
}

getUser({ name: "Steve", id: 1})

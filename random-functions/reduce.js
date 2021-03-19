// playing with reduce method
// if the initial value is not set then values wont run through function

const arrayObject = [
  { x: 1 },
  { x: 2 },
  { x: 3 }
]

const sumArrayObject = arrayObject.reduce((acc, cv) => acc + cv.x, 0)


// reducing an array of arrays into one array
const arrayOfArrays = [[0, 1], [2, 3], [4, 5]]

const oneArray = arrayOfArrays.reduce((acc, cv) => acc.concat(cv), [])

// counting instances of values in an object
// cv is each element in the array
// condition is checking if the name exists in the acc object then add 1
// else count is default 1.
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

const nameCount = names.reduce((acc, cv) => {
  if (cv in acc) {
    acc[cv]++
  } else {
    acc[cv] = 1
  }
  return acc
}, {})


// grouping people by a particular property

/* 
The cv is the current person in the people array.
The acc is an object and the property paramater becomes the new
property inside the acc object.
Each time the property doesn't exist inside the acc object it becomes an
array, and each time the property does exist, the person object is pushed
inside of that object.
*/
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupByProp(arrObject, property) {
  const grouped = people.reduce((acc, cv) => {
    const key = cv[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(cv)
    return acc
  }, {})
  console.log(grouped)
}

groupByProp(people, 'age')
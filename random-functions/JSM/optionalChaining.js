// using "?" in case a certain property doesnt exist in an object

const optionalObject = [
  {name: 'john'},
  {name: 'mary', address: {number: 123, name: 'street'}},
  {name: 'harvey'}
]

// if I leave the optional "?" out then this throws an error and doesnt iterate.
for (let person of optionalObject) {
  console.log(person.address?.number)
}
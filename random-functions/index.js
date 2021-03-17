const testMap = new Map();

testMap.set('one', 'one')
testMap.set(2, 'two')

// testMap.forEach((key, value) => console.log(key + ': ' + value))
// console.log(testMap.get('one'))

const testMap2 = new Map([
  ['one', 'uno'],
  ['dos', 'two']
])

// console.log(testMap2)

// I don't think normal spread syntax works
const mergeMap = {...testMap, testMap2}
// In order to merge map have to use Map keyword
const actualMergeMap = new Map([...testMap, ...testMap2])

console.log(actualMergeMap)

// In JavaScript you can alter the size of the original array???
// You can alter the elements and also have any type of element in the array?
// JavaScript has no safety features??????

const array = [1, 2, 3, 4]

array.push(3)
array.pop()
array.splice(2, 1, 5)
array.splice(2, 1, 'dos')

console.log(array)
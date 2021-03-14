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

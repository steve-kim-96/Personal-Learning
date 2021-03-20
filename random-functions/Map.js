const testMap = new Map();

testMap.set("one", "one");
testMap.set(2, "two");

// testMap.forEach((key, value) => console.log(key + ': ' + value))
// console.log(testMap.get('one'))

const testMap2 = new Map([
  ["one", "uno"],
  ["dos", "two"],
]);

// console.log(testMap2)

// I don't think normal spread syntax works
const mergeMap = { ...testMap, testMap2 };
// In order to merge map have to use Map keyword
const actualMergeMap = new Map([...testMap, ...testMap2]);

/*
  new Map() – creates the map.
  map.set(key, value) – stores the value by the key.
  map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
  map.has(key) – returns true if the key exists, false otherwise.
  map.delete(key) – removes the value by the key.
  map.clear() – removes everything from the map.
  map.size – returns the current element count.
*/

/*
  map.keys() – returns an iterable for keys,
  map.values() – returns an iterable for values,
  map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

*/

// finding and storing unique values
const values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const uniqueValues = Array.from(new Set(values))

// finding uniqueness in anagrams
const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function uniqueWords (arr) {
  let map = new Map();

  for (let word of arr) {
    const sorted = word.toLowerCase().split('').sort().join('')
    map.set(sorted, word)
  }
  return Array.from(map.values())
}

console.log(uniqueWords(arr))

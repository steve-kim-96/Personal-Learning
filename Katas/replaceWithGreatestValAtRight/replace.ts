/*
  Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.
*/

const arre = [17,18,5,4,6,1]

function replaceElements(arr: number[]): number[] {
  let max = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    let current: number = arr[i]
    arr[i] = max
    max = Math.max(max, current)
  }
  return arr
};

console.log(replaceElements(arre))
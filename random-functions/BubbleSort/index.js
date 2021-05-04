/*
Bubble sort performs n-1 comparisons where n is the number of elements in the array
Worst-case Bubble sort performs n-1 comparison for each element in the array
O(n(n-1)) =>
  O(n^2) is the time-complexity
*/

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

function bubbleSort(arr) {
  let count = 0
  let swapping = true
  while(swapping) {
    swapping = false
  for (let i = 0; i < arr.length; i++) {
    if (canSwap(arr[i], arr[i + 1])) {
      console.log(`swapping ${arr[i]} with ${arr[i + 1]}`)
      swap(arr, i, i + 1)
      count++
      swapping = true
    }
  }
}
console.log(`loop ran ${count} times`)
  return arr
}

const canSwap = (num1, num2) => {
  return num1 > num2
}

const swap = (arr, current, next) => {
  let temp = arr[current]
  arr[current] = arr[next]
  arr[next] = temp
}

console.log(bubbleSort(arr))
function mergeSort (arr) {
  const length = arr.length
  if (arr.length === 1) return arr
  const mid = Math.floor(length / 2)
  const leftArray = arr.slice(0, mid)
  const rightArray = arr.slice(mid, length)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (leftArray, rightArray) => {
  const sortedArray = []
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0])
      leftArray.shift()
    } else {
      sortedArray.push(rightArray[0])
      rightArray.shift()
    }

  }
  return sortedArray.concat(leftArray, rightArray)
}

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));
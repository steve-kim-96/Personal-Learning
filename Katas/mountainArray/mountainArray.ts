// Mountain array
const arr = [0, 1, 2, 3, 1, 1]

function validMountainArray(arr: number[]) {

};

function descending (arr: number[]): boolean {
  const maxNumber = Math.max(...arr)
  const maxIndex = arr.indexOf(maxNumber)
  for (let i = 0; i < arr.length; i++) {
    if (arr[maxIndex] > arr[maxIndex + i] && arr[maxIndex + i] !== arr[maxIndex + i + 1]) return true
  }
  return false
}

console.log(descending(arr))

// formula is arr[0] < arr[1] ... < arr[i - 1] < arr[i] -- ascending
// arr[i] > arr[i + 1] ... > arr[arr.length - 1] -- descending
// first condition **arr.length >= 3**
// how do I find the point at which the array starts to go down???

// two things:
/*
  when does the array start going up?
  when does the array start going down?
*/

/*
  I could look for the max number in the array and store the value?
  then I could indicate if  arr[0 + i] < max number && arr[indexOf(maxNumber)] > arr[indexOf(maxNumber) + 1]
  then at the index of max number, if the consecutive numbers are lower consistently
*/

// // function is for duplicating zeros where i is zero and shifting the array to the right dependent on the amount of zeros added.

// const input = [1, 0, 2, 3, 0, 4, 5, 0]

// function duplicateZeros(arr: number[]): void {
//     const oldInputLength = arr.length
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i]) {
//             arr.splice(i, 0, 0)
//             i++
//             arr.splice(oldInputLength - arr.length)
//         }
//     }

// }

// // // Need to delete the amount of elements from the end that equals the amount of elements added to the array
// // // can use splice to specificly target last element of array and is changing array in place
// // // I can save the length of old array to variable and take the new length

// // duplicateZeros(input)
// // console.log(input)

// // this function is for merging two arrays together, sorting them and also removing all zeros from the array

// const nums1 = [1, 2, 3, 0, 0, 0]
// const nums2 = [1, 2, 3, 4, 5, 0]
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//     // delete the last m elements in nums and insert the first n elements of nums2 into num1
//     // sort nums1 in ascending form
//     nums1.sort((a, b) => a - b)
// };

// // for each item in nums2 push the element into nums1 array as long as the number is not 0
// // go into nums1 and foreach element that equals zero splice
// // then sort the array


// // For each element in the array, if the element is equal to the value then remove it in place and return the new length of the array
// const array = [0, 1, 2, 2, 3, 0, 4, 2]
// const value = 2

// function removeElement(nums: number[], val: number): number {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) {
//             nums.splice(i, 1)
//             i--
//         }
//     }
//     return nums.length
// };


// // Remove duplicates in the array IN PLACE so that each value only appears once, and return the new length
// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

// function removeDuplicates(nums: number[]): number {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1)
//             i--
//         }
//     }
//     return nums.length
// };


// // run through the array with forEach or for loop
// // since it's a sorted array if spliced it will skip the next number
// // but i need to know if that number exists more than once


// // Need to check if the next element is the current element * 2
// const arr1 = [10, 2, 5, 3]
// const arr2 = [3, 1, 7, 11]

// function checkIfExist(arr: number[]): boolean {
//     const set = new Set()
//     for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i] / 2) || set.has(arr[i] * 2)) {
//      return true            
//      }      
//      set.add(arr[i])
//     }
//     return false
// };

// console.log(checkIfExist(arr1))
// // Need to go through the array
// // I could sort the array first to make it easy
// // Then I could save the value of the element and check if any subsequent elements is 2* that element

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

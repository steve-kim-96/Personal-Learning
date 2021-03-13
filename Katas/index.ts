// // function is for duplicating zeros where i is zero and shifting the array to the right dependent on the amount of zeros added.

// const input = [1,0,2,3,0,4,5,0]
// function duplicateZeros(arr: number[]): void {
//     const oldInputLength = arr.length
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i]){
//             arr.splice(i, 0, 0)
//             i++
//             arr.splice(oldInputLength - arr.length)
//         }
//     }

// }

// // Need to delete the amount of elements from the end that equals the amount of elements added to the array
// // can use splice to specificly target last element of array and is changing array in place
// // I can save the length of old array to variable and take the new length

// duplicateZeros(input)
// console.log(input)

// this function is for merging two arrays together, sorting them and also removing all zeros from the array

const nums1 = [0, 0, 0, 0, 0]
const nums2 = [1, 2, 3, 4, 5]
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums2.forEach((number, index) => number ? nums1.push(number) : index++)
    nums1.forEach((number, index) => {
        if (!number) {
            nums1.splice(index, 1)
            index++
        }
        number    
    })
    // nums1.sort()
    console.log(nums1)
};

merge(nums1, 3, nums2, 3)

// for each item in nums2 push the element into nums1 array as long as the number is not 0
// go into nums1 and foreach element that equals zero splice
// then sort the array

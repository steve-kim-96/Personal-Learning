// // function is for duplicating zeros where i is zero and shifting the array to the right dependent on the amount of zeros added.

const input = [1,0,2,3,0,4,5,0]

function duplicateZeros(arr: number[]): void {
    const oldInputLength = arr.length
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]){
            arr.splice(i, 0, 0)
            i++
            arr.splice(oldInputLength - arr.length)
        }
    }

}

// // Need to delete the amount of elements from the end that equals the amount of elements added to the array
// // can use splice to specificly target last element of array and is changing array in place
// // I can save the length of old array to variable and take the new length

// duplicateZeros(input)
// console.log(input)

// this function is for merging two arrays together, sorting them and also removing all zeros from the array

const nums1 = [1, 2, 3, 0, 0, 0]
const nums2 = [1, 2, 3, 4, 5, 0]
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	// delete the last m elements in nums and insert the first n elements of nums2 into num1
	console.log(nums1.splice(m, nums1.length, ...nums2.slice(0, n)))
	// sort nums1 in ascending form
	nums1.sort((a, b) => a - b)
    // console.log(nums1)
};

merge(nums1, 3, nums2, 5)

// for each item in nums2 push the element into nums1 array as long as the number is not 0
// go into nums1 and foreach element that equals zero splice
// then sort the array

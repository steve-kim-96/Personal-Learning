// this function is for merging two arrays together, sorting them and also removing all zeros from the array

const nums1 = [1, 2, 3, 0, 0, 0]
const nums2 = [1, 2, 3, 4, 5, 0]

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums2.splice(n, nums2.length)
  nums1.splice(m, nums1.length, ...nums2)
  nums1.sort((a, b) => a-b)
};

merge(nums1, 3, nums2, 5)
console.log(nums1)

// for each item in nums2 push the element into nums1 array as long as the number is not 0
// go into nums1 and foreach element that equals zero splice
// then sort the array
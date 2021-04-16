// For each element in the array, if the element is equal to the value then remove it in place and return the new length of the array
const array = [0, 1, 2, 2, 3, 0, 4, 2]
const value = 2

function removeElement(nums: number[], val: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

console.log(removeElement(array, value))
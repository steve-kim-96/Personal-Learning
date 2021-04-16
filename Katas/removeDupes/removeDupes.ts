// Remove duplicates in the array IN PLACE so that each value only appears once, and return the new length
const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

function removeDuplicates(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

console.log(removeDuplicates(nums))
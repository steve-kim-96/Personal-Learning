const areyofnum = [1,3,1,-1,3]

function singleNumber (nums: number[]) {
  return nums.reduce((acc, cv) => acc ^ cv)
}

console.log(-4^3)
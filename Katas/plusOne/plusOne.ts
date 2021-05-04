const digits = [1, 2, 3, 9]

function plusOne(digits: number[]): number[] {
  Number(digits.join('')) + 1
  return Array.from(digits.toString()).map(Number)
};

console.log(plusOne(digits))
/*
  Recursion is the idea that the function calls onto itself instead of looping
  ** Loop based algorithm is more memory saving**
*/

// this is the basic idea of recursion where x is multiplied by x until n reaches 1,
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

// finding the sum of n - 1 numbers: 

// using recursion
function sumToRecursion(n) {
  return n === 1 ? n : n + sumTo(n - 1);
}

// using loop
function sumToLoop (n) {
  let result = 0
  for (let i = 0; i < n; i++) {
    result += (n - i)
  }
  return result
}

// using arithmetic progression
// formula for sum is n * (n + 1) / 2

function sumToProgression (n) {
  return n * (n + 1) / 2;
}


// Calculate factorial using recursion

function factorial (n) {
  return n === 1 ? n : n * factorial(n - 1)
}


// Fibonacci numbers

function fib (n) {
  
}
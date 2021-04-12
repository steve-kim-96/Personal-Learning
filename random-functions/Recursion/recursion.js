// recursive factorial

function recursiveFactorial(n) {
  //base case if n is 0, otherwise recurse
  return !n ? 1 : recursiveFactorial(n - 1) * n
}

const recursiveSolution = recursiveFactorial(5)

console.log(recursiveSolution)
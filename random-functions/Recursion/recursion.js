// recursive factorial

function recursiveFactorial(n) {
  //base case if n is 0, otherwise recurse
  return !n ? 1 : recursiveFactorial(n - 1) * n
}

const recursiveSolution = recursiveFactorial(5)

console.log(recursiveSolution)

/*
  You always need: 
    1. A recursive case --> The condition in which the function will perform an action and call itself
    2. A base case --> The condition in which the function returns a value instead of calling itself i.e. a stopping condition 
*/
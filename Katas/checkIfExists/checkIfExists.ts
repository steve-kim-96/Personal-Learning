// Need to check if the next element is the current element * 2
const arr1 = [10, 2, 5, 3]
const arr2 = [3, 1, 7, 11]

function checkIfExist(arr: number[]): boolean {
    const set = new Set()
    for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] / 2) || set.has(arr[i] * 2)) {
     return true            
     }      
     set.add(arr[i])
    }
    return false
};

console.log(checkIfExist(arr1))
// Need to go through the array
// I could sort the array first to make it easy
// Then I could save the value of the element and check if any subsequent elements is 2* that element

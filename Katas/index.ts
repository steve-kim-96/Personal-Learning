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

duplicateZeros(input)
console.log(input)


// Need to delete the amount of elements from the end that equals the amount of elements added to the array
// can use splice to specificly target last element of array and is changing array in place
// I can save the length of old array to variable and take the new length
const input = [1,0,2,3,0,4,5,0]
function duplicateZeros(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]){
            arr.splice(i, 0, 0)
            i++
        }
    }

}

duplicateZeros(input)
console.log(input)

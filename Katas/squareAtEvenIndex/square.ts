// square each number if the index is even number

const squareArr = [3, 2, 3, 4, 5, 6, 7]

function squareAtEvenIndex (arr: number[]) : void {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] **= 2
    }
  }
  console.log(arr)
}

squareAtEvenIndex(squareArr)
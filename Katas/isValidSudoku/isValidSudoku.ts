const sudokuBoard =
  [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ]

  function isValidSudoku(board: string[][]): boolean {
    const set = new Set()
    
    for (let row = 0; row < 9; row++) {
        for(let column = 0; column < 9; column++) {
            const value = board[row][column]
            if (value === '.') continue
            const rowValue = `$row {row} value ${value}`
            const columnValue = `$column {column} value ${value}`
            const box = `X ${Math.floor(column / 3)} , Y ${Math.floor(row / 3)}, value ${value}`
            if (set.has(box) || set.has(rowValue) || set.has(columnValue)) {
                return false
            }
            set.add(box).add(rowValue).add(columnValue)
        }
    }
    return true
};
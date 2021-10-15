// O(n) time
// O(n) space
function spiralTraverse(arr) {
    const result = [];
    
    spiralFill(arr, 0, arr.length - 1, 0, arr[0].length - 1, result)
    return result;
}

function spiralFill(arr, startRow, endRow, startCol, endCol, result) {
    if (startRow > endRow || startCol > endCol) return;

    for (let col = startCol; col <= endCol; col++) {
        result.push(arr[startRow][col]);
    }

    for(let row = startRow + 1; row <= endRow; row++) {
        result.push(arr[row][endCol])
    }

    for (let col = endCol - 1; col >= startCol; col--) {
        if (startRow === endRow) break;
        result.push(arr[endRow][col]);
    }

    for (let row = endRow - 1; row >= startRow + 1; row--) {
        if (startCol === endCol) break;
        result.push(arr[row][startCol])
    }

    spiralFill(arr, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result)
}

console.log(spiralTraverse([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]))
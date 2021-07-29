function ticTacToeChecker(arr) {
    let winCombinations = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6]
    ];
    let flattenedArr = arr.flat();

    for (win of winCombinations) {
        if (
            flattenedArr[win[0]] == flattenedArr[win[1]] && 
            flattenedArr[win[1]] == flattenedArr[win[2]]
            ) {
            if (flattenedArr[win[0]] === 1) {
                return 1
            }
            return 2
        }
    }

    if (flattenedArr.includes(0)) {
        return -1
    }
    
    return 0
}

console.log(ticTacToeChecker([[1, 2, 1], 
                            [2, 1, 1], 
                            [2, 1, 2]]))
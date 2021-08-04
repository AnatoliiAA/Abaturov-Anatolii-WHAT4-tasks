function createChessBoard(width, length, symbol) {
    if (
        !Number.isInteger(width)
        || !Number.isInteger(length)
        || typeof width !== 'number'
        || typeof length !== 'number'
        || typeof symbol !== 'string'
    ) {
        return { status: 'failed', reason: 'Width and length must be integer, and sumbol must be a string' };
    }

    if (
        typeof width === 'undefined'
        || typeof length === 'undefined'
        || typeof symbol === 'undefined'
    ) {
        return { status: 'failed', reason: 'You should specify all 3 params: width, length and symbol' };
    }

    if (symbol.length !== 1 || symbol === ' ') {
        return { status: 'failed', reason: 'Symbol must contain only 1 character and it must not be a space' };
    }

    if (
        width <= 0
        || width >= 20
        || length <= 0
        || length >= 20
    ) {
        return { status: 'failed', reason: 'Width and length must be bigger than 0 and less than 20' };
    }

    let chessBoard = [];
    let finalBoard;
    let halfWidth = ~~(width / 2) || 1;

    for (let i = 0; i < length; i += 1) {
        chessBoard.push(Array(halfWidth).fill(symbol));
        if (width === 1 && i % 2) {
            chessBoard[i].pop();
        }
    }

    chessBoard.forEach((el, index) => {
        chessBoard[index] = index % 2 ? '  ' + el.join('  ') : el.join('  ');
    })
    finalBoard = chessBoard.join('\n');
    console.log(finalBoard);
    return finalBoard;
}

export default createChessBoard
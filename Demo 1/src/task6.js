function numSequence(length, minimalSquare) {
    if (typeof length === 'undefined' || typeof minimalSquare === 'undefined') {
        return { status: 'failed', reason: 'You should specify 2 params: length and minimalSquare' };
    }

    if (!Number.isInteger(length) || typeof minimalSquare !== 'number') {
        return { status: 'failed', reason: 'Length should be integer and minimalSquare should be a number' };
    }

    if (length <= 0 || minimalSquare <= 0) {
        return { status: 'failed', reason: 'Length and minimalSquare should be > 0' };
    }

    let startNumber = Math.ceil(Math.sqrt(minimalSquare));
    let lastNumber = startNumber + length;
    let result = '';

    for (let i = startNumber; i < lastNumber; i += 1) {
        result += i.toString() + ' ';
    }

    return result.trim();
}
console.log(numSequence());
console.log(numSequence([1], 2));
console.log(numSequence('as', 2));
console.log(numSequence(-1, 2));
export default numSequence;
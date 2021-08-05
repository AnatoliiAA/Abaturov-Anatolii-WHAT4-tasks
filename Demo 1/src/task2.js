function checkEnvelopes(envelope1, envelope2) {
    function checkIfObject(variable) {
        if (typeof variable === 'object' && variable !== null && !Array.isArray(variable)) {
            return true;
        }
    }

    if (
        typeof envelope1 === 'undefined'
        || typeof envelope2 === 'undefined'
    ) {
        return { status: 'failed', reason: 'You should specify parameters for each envelope' };
    }

    if (!checkIfObject(envelope1) || !checkIfObject(envelope2)) {
        return { status: 'failed', reason: 'Variables must be valid objects' };
    }

    if (
        !envelope1.hasOwnProperty('w')
        || !envelope1.hasOwnProperty('l')
        || !envelope2.hasOwnProperty('w')
        || !envelope2.hasOwnProperty('l')
    ) {
        return {
            status: "failed",
            reason:
                'Variables must be objects and have the following format: {w: 12.1, l: 10} where "w" is width and "l" is length',
        };
    }

    if (
        typeof envelope1.w !== 'number'
        || typeof envelope1.l !== 'number'
        || typeof envelope2.w !== 'number'
        || typeof envelope2.l !== 'number'
    ) {
        return { status: 'failed', reason: 'Width and length must be numbers' };
    }

    if (
        typeof envelope1.w <= 0
        || typeof envelope1.w >= 1000000
        || typeof envelope1.l <= 0
        || typeof envelope1.l >= 1000000
        || typeof envelope2.w <= 0
        || typeof envelope2.w >= 1000000
        || typeof envelope2.l <= 0
        || typeof envelope2.l >= 1000000
    ) {
        return { status: 'failed', reason: 'Width and length must be greated than 0 and less than 1000000' };
    }

    const { w: width1, l: length1 } = envelope1;
    const { w: width2, l: length2 } = envelope2;

    if (
        (width1 === width2 && length1 === length2)
        || (width1 === length2 && length1 === width2)
    ) {
        return 0
    }

    if (
        (width1 <= width2 && length1 <= length2)
        || (width1 <= length2 && length1 <= width2)
    ) {
        return 1
    }

    if (
        (width2 <= width1 && length2 <= length1)
        || (width2 <= length1 && length2 <= width1)
    ) {
        return 2
    }
    return 0
}

export default checkEnvelopes

function findFibInRange(context) {
    function checkIfObject(variable) {
        if (typeof variable === 'object' && variable !== null && !Array.isArray(variable)) {
            return true;
        }
    }

    function findInRange(min, max) {
        let firstNum = 0;
        let secondNum = 1;
        let thirdNum = 1;
        let result = [];

        while (thirdNum < max) {
            if (thirdNum > min) {
                result.push(thirdNum);
            }
            firstNum = secondNum;
            secondNum = thirdNum;
            thirdNum = firstNum + secondNum;
        }

        return result
    }

    function findFirstN(length) {
        let result = [0, 1];

        for (let i = 2; i < length; i += 1) {
            result[i] = result[i - 1] + result[i - 2];
        }
        return result
    }

    if (typeof context === 'undefined') {
        return { status: 'failed', reason: 'You should specify context object' };
    }

    if (!checkIfObject(context)) {
        return { status: 'failed', reason: 'Context should be an object' };
    }

    if ((!context.hasOwnProperty('min') || !context.hasOwnProperty('max')) && !context.hasOwnProperty('length')) {
        return { status: 'failed', reason: 'You should specify min, max properties or length property' };
    }

    if (context.hasOwnProperty('length')) {
        if (!Number.isInteger(context.length)) {
            return { status: 'failed', reason: 'Length should be an integer' };
        }

        if (context.length < 1) {
            return { status: 'failed', reason: 'Length should be > 1' };
        }

        let { length } = context;
        let result = findFirstN(length);
        return result;
    }

    if (!Number.isInteger(context.min) || !Number.isInteger(context.max)) {
        return { status: 'failed', reason: 'Min and max should be integer' };
    }

    if (context.min < 1 || context.max < 1) {
        return { status: 'failed', reason: 'Min and max should be > 1' };
    }

    if (context.min > context.max) {
        return { status: 'failed', reason: 'Min should be < max' };
    }

    let { min, max } = context;
    let result = findInRange(min, max);
    return result;
}

console.log(findFibInRange());
console.log(findFibInRange({}));
console.log(findFibInRange({ min: 10 }));
console.log(findFibInRange({ length: '' }));
console.log(findFibInRange({ msn: 10, max: 100, lesth: 20 }));
console.log(findFibInRange({ msn: 10, max: 100}));
console.log(findFibInRange({ min: 10, max: -100}));
console.log(findFibInRange({ min: 1011, max: 100}));
console.log(findFibInRange({ min: 10, max: 100, length: 20 }));

export default findFibInRange
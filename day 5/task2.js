function findPartMaxProd(num) {
    let result = [[],];

    if (num === 1) {
        result[0].push(1);
        result[1] = 1;
        return result;
    }

    if (num % 3 === 0) {
        result[0] = Array(num/3).fill(3);
        result[1] = result[0].reduce((acc,val) => acc*=val)
        return result;
    }

    if (num % 3 === 1) {
        let additionalResult = Array(~~(num/3) - 1).fill(3);
        additionalResult.unshift(4);
        result.unshift(additionalResult);
        result[1] = Array(~~(num/3) - 1).fill(3);
        result[1].push(2,2);
        result[2] = result[0].reduce((acc,val) => acc*=val)
        console.log(result[0]);
        console.log(result[1]);
        return result;
    }

    if (num % 3 === 2) {
        result[0] = Array(~~(num/3)).fill(3);
        result[0].push(2)
        result[1] = result[0].reduce((acc,val) => acc*=val)
        console.log(result[0]);
        return result;
    }
}

console.log(findPartMaxProd(8))
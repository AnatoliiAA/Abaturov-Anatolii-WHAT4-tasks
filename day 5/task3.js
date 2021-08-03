function tickets(arr) {
    let currency = {
        25: 0,
        50: 0,
        100: 0
    }
    let length = arr.length;
    let result = 'YES';

    for (let i = 0; i < length; i += 1) {
        if (arr[i] === 25) {
            currency[25] += 1;
        }
        if (arr[i] === 50) {
            currency[25] -= 1;
            currency[50] += 1;
        }
        if (arr[i] === 100) {
            currency[25] -= 1;
            currency[50] -= 1;
            currency[100] += 1;
        }

        if (currency[25] < 0 || currency[50] < 0) {
            result = 'NO';
            return result;
        }
    }
    return result;
}

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 25, 50, 50, 100]))
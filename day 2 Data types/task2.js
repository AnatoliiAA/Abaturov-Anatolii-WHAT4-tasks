//First way

function twoOldestAges(arr) {
    const sortAsc = (a, b) => a - b;
    let result = arr.sort(sortAsc).slice(arr.length-2);
    return result;
}

//Second way

function twoOldestAgesSecond(arr) {
    let firstMax = Math.max(...arr);
    arr[arr.indexOf(firstMax)] = -Infinity;
    let secondMax = Math.max(...arr);
    let result = [secondMax, firstMax];
    return result;
}

//Test cases

console.log(twoOldestAges( [1, 2, 10, 8] ))
console.log(twoOldestAgesSecond( [1, 2, 10, 8] ))
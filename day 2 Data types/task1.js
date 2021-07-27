function sumMin(arr) {
    const sortAsc = (a, b) => a - b;
    let minimumSum = 0;

    arr.forEach((el) => {
        el.sort(sortAsc);
        minimumSum += el[0];
    })
    return minimumSum;
}
// test cases
console.log(sumMin([[1,2,3],[33,22,55],[16,42,345,79,1]]))
console.log(sumMin([[11,2],[323,2,55]]))
console.log(sumMin([[13,11,2],[3,23,23,55],[23,55,3,77],[39,7,89,94]]))
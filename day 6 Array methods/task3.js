const fruits = ['Яблоко', 'Банан', 'Ананас'];
const fruitsForReduce = ['Яблоко', 'Банан', 'Ананас'];

fruits.forEach((el, i, arr) => {
    arr[i] = `${i + 1}: ${el}`;
})

fruitsForReduce.reduce((acc, el, i) => {
    acc[i] = `${i + 1}: ${el}`;
    return acc;
}, fruitsForReduce)

console.log(fruits);
console.log(fruitsForReduce);
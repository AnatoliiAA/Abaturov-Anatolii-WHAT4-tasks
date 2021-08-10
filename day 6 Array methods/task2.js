const fruits = ['Яблоко', 'Банан', 'Ананас'];

const filterByFirstLetter = fruits.filter(el => el[0].toLowerCase() === 'а');
const reduceByFirstLetter = fruits.reduce((acc, el) => {
    if (el[0].toLowerCase() === 'а') {
        acc.push(el);
    }
    return acc;
}, [])

console.log(filterByFirstLetter);
console.log(reduceByFirstLetter);
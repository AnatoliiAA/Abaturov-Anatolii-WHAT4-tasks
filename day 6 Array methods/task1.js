const fruits = ['Яблоко', 'Банан', 'Ананас'];

const firstLettersMap = fruits.map(el => el[0]);
const firstLettersReduce = fruits.reduce((acc, el) => {
    acc.push(el[0]);
    return acc;
}, [])

console.log(firstLettersMap);
console.log(firstLettersReduce);
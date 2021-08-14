import createChessBoard from './src/task1.js'
import checkEnvelopes from './src/task2.js'
import sortTriangles from './src/task3.js'
import findPalindrome from './src/task4.js'
import checkLuckyTickets from './src/task5.js'
import numSequence from './src/task6.js'
import findFibInRange from './src/task7.js'

console.log('task1 createChesBoard(2,5,"@"):');
console.log(createChessBoard(2,5,'@'));

console.log('task2 checkEnvelopes({ w: 1, l: 1 }, { w: 2, l: 2 }):');
console.log(checkEnvelopes({ w: 1, l: 1 }, { w: 2, l: 2 }));

console.log('task3 sortTriangles:');
console.log(sortTriangles());
console.log(sortTriangles({ verticeыs: 'ABC', a: 10, b: 20, c: 22.36 }));
console.log(sortTriangles({ vertices: 'AB', a: 10, b: 20, c: 22.36 }));
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20 }));
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20, c: '12' }));
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20, c: 50 }));
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20, c: 22.36 }));
console.log(sortTriangles({ vertices: 'ABC', a: 50, b: 60, c: 70 }, { vertices: 'ABC', a: 3, b: 4, c: 5 }, { vertices: 'ABC', a: 5, b: 6, c: 7 }));

console.log('task4 findPalindrome:');
console.log(findPalindrome());
console.log(findPalindrome(0));
console.log(findPalindrome(9));
console.log(findPalindrome('12'));
console.log(findPalindrome(22.1));
console.log(findPalindrome(10101011));

console.log('task5 checkLuckyTickets:');
console.log(checkLuckyTickets(''));
console.log(checkLuckyTickets({ min: '', max: 1043 }));
console.log(checkLuckyTickets({max: 1043 }));
console.log(checkLuckyTickets({ MSin: 1001, max: 1043 }));
console.log(checkLuckyTickets({ min: -11, max: 1043 }));
console.log(checkLuckyTickets({ min: 1500, max: 1043 }));

console.log('task6 numSequence:');
console.log(numSequence());
console.log(numSequence([1], 2));
console.log(numSequence('as', 2));
console.log(numSequence(-1, 2));
console.log(numSequence(3, 15));

console.log('task7 findFibInRange:');
console.log(findFibInRange());
console.log(findFibInRange({}));
console.log(findFibInRange({ min: 10 }));
console.log(findFibInRange({ length: '' }));
console.log(findFibInRange({ msn: 10, max: 100, lesth: 20 }));
console.log(findFibInRange({ msn: 10, max: 100}));
console.log(findFibInRange({ min: 10, max: -100}));
console.log(findFibInRange({ min: 1011, max: 100}));
console.log(findFibInRange({ min: 10, max: 100, length: 20 }));
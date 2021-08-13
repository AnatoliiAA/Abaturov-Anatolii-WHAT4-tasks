import createChessBoard from "./src/task1.js"

import sortTriangles from "./src/task3.js"

console.log("task1 createChesBoard(2,5,'@'):" + "\n");
console.log(createChessBoard(2,5,"@"));



console.log("task3 sortTriangles:" + "\n")
console.log(sortTriangles())
console.log(sortTriangles({ verticeыs: 'ABC', a: 10, b: 20, c: 22.36 }))
console.log(sortTriangles({ vertices: 'AB', a: 10, b: 20, c: 22.36 }))
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20 }))
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20, c: '12' }))
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20, c: 50 }))
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20, c: 22.36 }))
console.log(sortTriangles({ vertices: 'ABC', a: 50, b: 60, c: 70 }, { vertices: 'ABC', a: 3, b: 4, c: 5 }, { vertices: 'ABC', a: 5, b: 6, c: 7 }))
function sortTriangles(...triangles) {
    function checkIfObject(variable) {
        if (typeof variable === 'object' && variable !== null && !Array.isArray(variable)) {
            return true;
        }
    }
    function calculateArea(side1, side2, side3) {
        let p = (side1 + side2 + side3) / 2;
        let area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
        return ~~area;
    }

    let length = triangles.length;

    if (
        length === 0
    ) {
        return { status: 'failed', reason: 'You should specify at least 1 triangle object' };
    }

    for (let i = 0; i < length; i += 1) {
        if (!checkIfObject(triangles[i])) {
            return { status: 'failed', reason: 'Each triangle must be an object' };
        }

        if (!triangles[i].hasOwnProperty('vertices') || typeof triangles[i].vertices !== 'string') {
            return { status: 'failed', reason: 'You should specify vertices of trinagle in string format' };
        }

        if (triangles[i].vertices.length !== 3) {
            return { status: 'failed', reason: 'Vertices property must contain 3 characters' };
        }

        let vertices = triangles[i].vertices.toLowerCase().split('');

        if (
            !triangles[i].hasOwnProperty(vertices[0])
            || !triangles[i].hasOwnProperty(vertices[1])
            || !triangles[i].hasOwnProperty(vertices[2])
        ) {
            return {
                status: "failed",
                reason:
                    "The names of the vertices of the triangle must match with those which you specified in vertices variable",
            };
        }

        if (
            typeof triangles[i][vertices[0]] !== 'number'
            || typeof triangles[i][vertices[1]] !== 'number'
            || typeof triangles[i][vertices[2]] !== 'number'
        ) {
            return { status: 'failed', reason: 'Length of side must be numbers' };
        }

        if (
            triangles[i][vertices[0]] + triangles[i][vertices[1]] < triangles[i][vertices[2]]
            || triangles[i][vertices[0]] + triangles[i][vertices[2]] < triangles[i][vertices[1]]
            || triangles[i][vertices[1]] + triangles[i][vertices[2]] < triangles[i][vertices[0]]
        ) {
            return { status: 'failed', reason: 'Provided values must form a valid triangle' };
        }
    }

    let sortedTriangles = triangles.sort((triangle1, triangle2) => {
        let vertices1 = triangle1.vertices.toLowerCase().split('');
        let vertices2 = triangle2.vertices.toLowerCase().split('');
        let area1 = calculateArea(triangle1[vertices1[0]], triangle1[vertices1[1]], triangle1[vertices1[2]]);
        let area2 = calculateArea(triangle2[vertices2[0]], triangle2[vertices2[1]], triangle2[vertices2[2]]);
        return area2 - area1;
    })

    return sortedTriangles;
}

console.log(sortTriangles())
console.log(sortTriangles({ verticeыs: 'ABC', a: 10, b: 20, c: 22.36 }))
console.log(sortTriangles({ vertices: 'AB', a: 10, b: 20, c: 22.36 }))
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20 }))
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20, c: '12' }))
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20, c: 50 }))
console.log(sortTriangles({ vertices: 'ABC', a: 10, b: 20, c: 22.36 }))
console.log(sortTriangles({ vertices: 'ABC', a: 50, b: 60, c: 70 }, { vertices: 'ABC', a: 3, b: 4, c: 5 }, { vertices: 'ABC', a: 5, b: 6, c: 7 }))

export default sortTriangles
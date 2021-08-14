import sortTriangles from '../src/task3.js';

const assert = chai.assert;


describe('sortTriangles', function () {
    it('should work with at least 1 object passed to the function', function() {
        assert.deepEqual(sortTriangles(), { status: 'failed', reason: 'You should specify at least 1 triangle object' });
    });
    it('every passed parameter should be an object', function() {
        assert.deepEqual(sortTriangles({vertices: 'ABC', a: 1, b:2, c: 3},1,{}), { status: 'failed', reason: 'Each triangle must be an object' });
    });
    it('every passed parameter should have property "vertices" ', function() {
        assert.deepEqual(sortTriangles({ves: 'ABC', a: 1, b:2, c: 3}), { status: 'failed', reason: 'You should specify vertices of trinagle in string format' });
    });
    it('property "vertices" should be a string', function() {
        assert.deepEqual(sortTriangles({vertices: 123, a: 1, b:2, c: 3}), { status: 'failed', reason: 'You should specify vertices of trinagle in string format' });
    });
    it('property "vertices"  should contain 3 characters', function() {
        assert.deepEqual(sortTriangles({vertices: 'ABCD', a: 1, b:2, c: 3}), { status: 'failed', reason: 'Vertices property must contain 3 characters' });
    });
    it('key for other 3 properties should match with characters from "vertices"  property', function() {
        assert.deepEqual(sortTriangles({vertices: 'ABC', z: 1, b:2, c: 3}), {
            status: 'failed',
            reason:
                'The names of the vertices of the triangle must match with those which you specified in vertices variable',
        });
    });
    it('properties that represent sides length should be numbers', function() {
        assert.deepEqual(sortTriangles({vertices: 'ABC', a: '1', b:2, c: 3}), { status: 'failed', reason: 'Length of side must be numbers' });
    });
    it('values provided as sides length should form a valid triangle', function() {
        assert.deepEqual(sortTriangles({vertices: 'ABC', a: 1, b:20, c: 3}), { status: 'failed', reason: 'Provided values must form a valid triangle' });
    });
});
import findFibInRange from '../src/task7.js';

const assert = chai.assert;

describe('findFibInRange', function () {
    it('should work when context object has properties "min" and "max"', function () {
        assert.deepEqual(findFibInRange({ min: 1011, max: 100}), [144, 233, 377, 610, 987]);
    });
    it('should work when context object has property "length"', function () {
        assert.deepEqual(findFibInRange({ length: 10}), [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]);
    });
    it('should work only if parameter is passed to the function', function () {
        assert.deepEqual(findFibInRange(), { status: 'failed', reason: 'You should specify context object' });
    });
    it('passed parameter should be an object', function () {
        assert.deepEqual(findFibInRange('123'), { status: 'failed', reason: 'Context should be an object' });
    });
    it('passed parameter should have properties "min" & "max" or property "length"', function () {
        assert.deepEqual(findFibInRange({ m: 1011, max: 100}), { status: 'failed', reason: 'You should specify min, max properties or length property' });
    });
    it('property "length" should be an integer', function () {
        assert.deepEqual(findFibInRange({ length: '10'}), { status: 'failed', reason: 'Length should be an integer' });
    });
    it('property "length" should be >= 1', function () {
        assert.deepEqual(findFibInRange({ length: 0}), { status: 'failed', reason: 'Length should be > 1' });
    });
    it('property "min" should be an integer', function () {
        assert.deepEqual(findFibInRange({ min: 1.1, max: 100}), { status: 'failed', reason: 'Min and max should be integer' });
    });
    it('property "max" should be an integer', function () {
        assert.deepEqual(findFibInRange({ min: 1, max: 100.100}), { status: 'failed', reason: 'Min and max should be integer' });
    });
    it('property "min" should be >= 1', function () {
        assert.deepEqual(findFibInRange({ min: 0, max: 100}), { status: 'failed', reason: 'Min and max should be > 1' });
    });
    it('property "max" should be >= 1', function () {
        assert.deepEqual(findFibInRange({ min: 1, max: -100}), { status: 'failed', reason: 'Min and max should be > 1' });
    });
});
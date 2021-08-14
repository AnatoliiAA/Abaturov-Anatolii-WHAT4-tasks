import checkEnvelopes from '../src/task2.js';

const assert = chai.assert;

describe('checkEnvelopes', function () {
    it('should work correctly', function () {
        assert.equal(checkEnvelopes({ w: 1, l: 1 }, { w: 2, l: 2 }), 1);
    });
    it('should return 0 if width and length of envelopes are equal', function () {
        assert.equal(checkEnvelopes({ w: 1, l: 1 }, { w: 1, l: 1 }), 0);
    });
    it('should work only if parameters for both envelopes are specified', function () {
        assert.deepEqual(checkEnvelopes({ w: 1, l: 1 }), { status: 'failed', reason: 'You should specify parameters for each envelope' });
    });
    it('parameters of envelopes should be passed as objects', function () {
        assert.deepEqual(checkEnvelopes([2, 1], [1, 2]), { status: 'failed', reason: 'Variables must be valid objects' });
    });
    it('first object should have "w" property', function () {
        assert.deepEqual(checkEnvelopes({ z: 1, l: 1 }, { w: 2, l: 2 }), {
            status: 'failed',
            reason:
                'Variables must be objects and have the following format: {w: 12.1, l: 10} where "w" is width and "l" is length'
        });
    });
    it('first object should have "l" property', function () {
        assert.deepEqual(checkEnvelopes({ w: 1, z: 1 }, { w: 2, l: 2 }), {
            status: 'failed',
            reason:
                'Variables must be objects and have the following format: {w: 12.1, l: 10} where "w" is width and "l" is length'
        });
    });
    it('second object should have "w" property', function () {
        assert.deepEqual(checkEnvelopes({ w: 1, l: 1 }, { z: 2, l: 2 }), {
            status: 'failed',
            reason:
                'Variables must be objects and have the following format: {w: 12.1, l: 10} where "w" is width and "l" is length'
        });
    });
    it('second object should have "l" property', function () {
        assert.deepEqual(checkEnvelopes({ w: 1, l: 1 }, { w: 2, z: 2 }), {
            status: 'failed',
            reason:
                'Variables must be objects and have the following format: {w: 12.1, l: 10} where "w" is width and "l" is length'
        });
    });
    it('"w" and "l" properties in passed objects should be numbers', function () {
        assert.deepEqual(checkEnvelopes({ w: 'a', l: 1 },{ w: 1, l: 1 }), { status: 'failed', reason: 'Width and length must be numbers' });
    });
    it('"w" and "l" properties should be > 0 and < 1000000', function () {
        assert.deepEqual(checkEnvelopes({ w: -1, l: 1 },{ w: 1, l: 1 }), { status: 'failed', reason: 'Width and length must be greated than 0 and less than 1000000' });
    });
});
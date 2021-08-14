import numSequence from '../src/task6.js';

const assert = chai.assert;

describe('numSequence', function() {
    it('should work', function() {
        assert.equal(numSequence(3,15), '4 5 6');
    });
    it('should work only when 2 parameters are passed', function() {
        assert.deepEqual(numSequence(3), { status: 'failed', reason: 'You should specify 2 params: length and minimalSquare' });
    });
    it('first parameter should be an integer', function() {
        assert.deepEqual(numSequence(3.2,15), { status: 'failed', reason: 'Length should be integer and minimalSquare should be a number' });
    });
    it('second parameter should be a number', function() {
        assert.deepEqual(numSequence(3,'15'), { status: 'failed', reason: 'Length should be integer and minimalSquare should be a number' });
    });
    it('first parameter should be > 0', function() {
        assert.deepEqual(numSequence(0,15), { status: 'failed', reason: 'Length and minimalSquare should be > 0' });
    });
    it('second parameter should be > 0', function() {
        assert.deepEqual(numSequence(1,0), { status: 'failed', reason: 'Length and minimalSquare should be > 0' });
    });
});
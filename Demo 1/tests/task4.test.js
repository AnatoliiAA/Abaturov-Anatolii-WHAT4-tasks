import findPalindrome from '../src/task4.js';

const assert = chai.assert;

describe('finPalindrome', function() {
    it('should work', function() {
        assert.equal(findPalindrome(12329), 232);
    });
    it('should work only if parameter was passed to the function', function() {
        assert.deepEqual(findPalindrome(), { status: 'failed', reason: 'You should specify number to find palindrome' });
    });
    it('passed parameter should be an integer', function() {
        assert.deepEqual(findPalindrome('101'), { status: 'failed', reason: 'Number should be integer' });
    });
    it('passed parameter should be > 10', function() {
        assert.deepEqual(findPalindrome(9), { status: 'failed', reason: 'Number should be > 10 and < 9007199254740991' });
    });
    it('passed parameter should be < 9007199254740991', function() {
        assert.deepEqual(findPalindrome(90071992547409911), { status: 'failed', reason: 'Number should be > 10 and < 9007199254740991' });
    });
});
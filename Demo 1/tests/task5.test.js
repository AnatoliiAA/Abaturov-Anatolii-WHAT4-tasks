import checkLuckyTickets from '../src/task5.js';

const assert = chai.assert;

describe('checkLuckyTickets', function() {
    it('should work', function() {
        assert.deepEqual(checkLuckyTickets({ min: 1043, max: 1500 }), {tickets: {simple: 1, hard: 28}, winner: 'hard'});
    });
    it('should work when "min" property > "max" property', function() {
        assert.deepEqual(checkLuckyTickets({ min: 1500, max: 1043 }), {tickets: {simple: 1, hard: 28}, winner: 'hard'});
    });
    it('should work only if valid object is passed', function() {
        assert.deepEqual(checkLuckyTickets(1043), { status: 'failed', reason: 'You should specify min-max object in the next format: {min: 1, max: 123123}' });
    });
    it('passed object should have "min" property', function() {
        assert.deepEqual(checkLuckyTickets({ max: 1043 }), { status: 'failed', reason: 'You should specify min-max object in the next format: {min: 1, max: 123123}' });
    });
    it('passed object should have "max" property', function() {
        assert.deepEqual(checkLuckyTickets({ min: 1043 }), { status: 'failed', reason: 'You should specify min-max object in the next format: {min: 1, max: 123123}' });
    });
    it('"min" property should be >=1 ', function() {
        assert.deepEqual(checkLuckyTickets({ min: -1, max: 1043 }), { status: 'failed', reason: 'Min and max should be > 1 and < 999999' });
    });
    it('"min" property should be <= 999999 ', function() {
        assert.deepEqual(checkLuckyTickets({ min: 9999999, max: 1043 }), { status: 'failed', reason: 'Min and max should be > 1 and < 999999' });
    });
    it('"max" property should be >=1 ', function() {
        assert.deepEqual(checkLuckyTickets({ min: 1, max: -1000 }), { status: 'failed', reason: 'Min and max should be > 1 and < 999999' });
    });
    it('"max" property should be <= 999999 ', function() {
        assert.deepEqual(checkLuckyTickets({ min: 1, max: 99999999 }), { status: 'failed', reason: 'Min and max should be > 1 and < 999999' });
    });
});
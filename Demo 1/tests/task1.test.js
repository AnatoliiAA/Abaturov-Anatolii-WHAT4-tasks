import createChessBoard from "../src/task1.js";

mocha.setup("bdd");
const assert = chai.assert;

describe("createChessBoard", function () {
    it("should be a function", function () {
        assert.isFunction(createChessBoard, 'its a function');
    });
    it("should work correctly", function () {
        assert.equal(createChessBoard(2,3,"@"), '@\n  @\n@');
    });
    it("should work only with all 3 parameters specified", function () {
        assert.deepEqual(createChessBoard(4, "@"), { status: 'failed', reason: 'You should specify all 3 params: width, length and symbol' });
    });
    it("should accept only integer for width and length", function () {
        assert.deepEqual(createChessBoard(2.2, 4, "@"), { status: 'failed', reason: 'Width and length must be integer, and symbol must be a string' });
    });
    it("should accept only string for symbol", function () {
        assert.deepEqual(createChessBoard(2, 4, 2), { status: 'failed', reason: 'Width and length must be integer, and symbol must be a string' });
    });
    it("symbol should contain only 1 character", function () {
        assert.deepEqual(createChessBoard(2, 4, "**"), { status: 'failed', reason: 'Symbol must contain only 1 character and it must not be a space' });
    });
    it("width and length should be > 0 and <20", function () {
        assert.deepEqual(createChessBoard(0, 4, "@"), { status: 'failed', reason: 'Width and length must be bigger than 0 and less than 20' });
    });
});

mocha.run();
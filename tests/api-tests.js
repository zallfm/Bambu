var assert = require('assert');
var first = require('../app');

describe('First', function () {
    it('should return to Api', function () {
        assert.equal(app(), 'hello world');
    });
});
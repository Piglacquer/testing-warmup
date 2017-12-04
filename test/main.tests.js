const code = require('../main.js')
const assert = require('assert')


describe("#toTheFuture", function (){
  it("should square all numbers input and add them together", function(){
    assert.deepEqual(code.toTheFuture(4,6,8), 116)
    assert.deepEqual(code.toTheFuture(1,2,3), 14)
    assert.deepEqual(code.toTheFuture(3,4,5), 50)
    }
  )}
)

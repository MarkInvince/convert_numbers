var convertNumbers = require('../src/index')
var assert = require('assert')

describe('Convert Numbers Tests', () => {
  it('Test Success convert', () => {
    let value = convertNumbers.convert(123)
    assert.equal(value, 'one hundred twenty three')
  })

  it('Test Error Too Large', () => {
    try {
      convertNumbers.convert(129999999999993)
      assert.ok(false)
    } catch (error) {
      assert.equal(error.message, 'Number is too large')
    }
  })

  it('Test Error Incorrect', () => {
    try {
      convertNumbers.convert('test string')
      assert.ok(false)
    } catch (error) {
      assert.equal(error.message, 'Number is incorrect')
    }
  })
})

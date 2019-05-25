'use strict'

var NUMBER_TEN = 10
var NUMBER_ONE_HUNDRED = 100
var NUMBER_ONE_THOUSAND = 1000
var NUMBER_ONE_MILLION = 1000000
var NUMBER_MAX = 9999999

var TO_TWENTY = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
]

var TO_HUNDRED = [
  'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
]

/**
 * Convert Number to String
 *
 * @param {number|string} number
 * @param stringNumbers
 * @returns {*}
 */
function convert (number, stringNumbers = []) {
  var numberToString = ''
  number = parseInt(number, 10)

  if (!Number.isInteger(number)) {
    throw new TypeError(
      'Number is incorrect'
    )
  }

  if (number > NUMBER_MAX) {
    throw new RangeError(
      'Number is too large'
    )
  }

  if (number === 0) {
    return !stringNumbers ? 'zero' : stringNumbers.join(' ').replace(/,$/, '')
  }

  if (number < 20) {
    numberToString = TO_TWENTY[number]
    number = 0
  } else if (number < NUMBER_ONE_HUNDRED) {
    numberToString = TO_HUNDRED[Math.floor(number / NUMBER_TEN)]
    number = number % NUMBER_TEN
  }
  else if (number < NUMBER_ONE_THOUSAND) {
    numberToString = convert(Math.floor(number / NUMBER_ONE_HUNDRED)) + ' hundred'
    number = number % NUMBER_ONE_HUNDRED
  } else if (number < NUMBER_ONE_MILLION) {
    numberToString = convert(Math.floor(number / NUMBER_ONE_THOUSAND)) + ' thousand,'
    number = number % NUMBER_ONE_THOUSAND;
  } else if (number <= NUMBER_MAX) {
    numberToString = convert(Math.floor(number / NUMBER_ONE_QUADRILLION)) +
      ' million,'

    number = number % NUMBER_ONE_MILLION
  }

  stringNumbers.push(numberToString)

  return convert(number, stringNumbers)
}

module.exports = convert
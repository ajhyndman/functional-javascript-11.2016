'use strict'

module.exports = function arrayMap (arr, fn) {
  return arr.reduce(
    (accumulator, item) => accumulator.concat(
      // I wrap this in an array, to defend against concat flattening my entry
      // into the accumulator, if it is an array.
      [fn(item)]
    ),
    []
  )
}

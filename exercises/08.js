'use strict'

function duckCount () {
  return Array.prototype.reduce.call(
    arguments,
    (accumulator, argument) => (
      Object.prototype.hasOwnProperty.call(argument, 'quack')
        ? accumulator + 1
        : accumulator
    ),
    0
  )
}

module.exports = duckCount

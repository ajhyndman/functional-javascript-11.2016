'use strict'

function countWords (inputWords) {
  return inputWords.reduce(
    (accumulator, word) => (
      // Copy the accumulator and add in a new key with this word.
      Object.assign(
        {},
        accumulator,
        {
          // if the accumulator object already had this key, increment the
          // value by one.
          [word]: accumulator[word] ? accumulator[word] + 1 : 1
        }
      )
    ),
    // initial value for reduce
    {}
  )
}

module.exports = countWords

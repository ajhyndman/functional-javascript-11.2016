'use strict'

function reduce (arr, fn, initial, index, original) {
  if (arr.length === 0) return initial
  // const [head, ...rest] = arr
  const head = arr[0]
  const rest = arr.slice(1)
  const accumulator = fn(initial, head, index || 0, original || arr)

  return reduce(
    rest,
    fn,
    accumulator,
    (index || 0) + 1,
    original || arr
  )
}

module.exports = reduce

'use strict'

function curryN (fn, n) {
  const arity = n == null ? fn.length : n
  if (n === 0) return fn()

  return (arg) => (curryN(
    fn.bind(this, arg),
    arity - 1
  ))
}

module.exports = curryN

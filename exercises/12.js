'use strict'

// Spies seem like a weird inclusion in an intro to functional programming —
// especially with this weird, mutative API.

function Spy (target, method) {
  const originalMethod = target[method]

  const spy = {
    count: 0
  }

  target[method] = function () {
    spy.count = spy.count + 1
    return originalMethod.apply(this, arguments)
  }

  return spy
}

module.exports = Spy

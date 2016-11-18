'use strict'

// This relies on the Window API, which is a weird thing to not explain at
// this stage.

function repeat (operation, num) {
  // modify this so it can be interrupted
  if (num <= 0) return
  operation()
  return setImmediate(
    function () { repeat(operation, --num) }
  )
}

module.exports = repeat

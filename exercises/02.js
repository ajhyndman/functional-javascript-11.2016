'use strict'

function repeat (operation, num) {
  if (num === 0) return
  repeat(operation, num - 1)
}

// Do not remove the line below
module.exports = repeat

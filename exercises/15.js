'use strict'

function loadUsers (userIds, load, done) {
  return done(userIds.map((id) => load(id)))
}

module.exports = loadUsers

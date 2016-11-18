'use strict'

function getDependencies (moduleSpec) {
  // Bail out if someone gives us a module without dependencies
  if (moduleSpec == null || moduleSpec.dependencies == null) return []

  return Array.from(
    // Use ES6 set to guarantee uniqueness
    new Set(
      Object.keys(moduleSpec.dependencies).reduce(
        (acc, name) => (
          acc.concat(
            // append this dependency
            [`${name}@${moduleSpec.dependencies[name].version}`]
          ).concat(
            // append any transitive dependencies
            moduleSpec.dependencies[name].dependencies != null
              ? getDependencies(moduleSpec.dependencies[name])
              : []
          )
        ),
        []
      ).sort()
    )
  )
}

module.exports = getDependencies

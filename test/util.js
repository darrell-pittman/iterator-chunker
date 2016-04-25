"use strict"

module.exports = {
  check : (done, f) => {
    try {
      f()
      done()
    } catch (e) {
      done(e)
    }
  }
}
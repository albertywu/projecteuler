const range = require('./range')

// brute-force check of prime-ness
// there must be better ways to do this...
const isPrime = (x) => {
  const tests = range(2, Math.floor(x/2))
  for (let i = 0; i < tests.length; i++) {
    if (x % tests[i] === 0)
      return false
  }
  return true
}

module.exports = isPrime
const sieve = require('sieve')

console.log(
  sieve(2000000)
  .reduce((acc, curr) => acc + curr, 0)
)
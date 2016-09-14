const isPrime = require('./utils/isPrime')
const range = require('./utils/range')

const isFactorOf = (x, N) => N % x === 0

// (N: number) => number[]
const getPrimeFactors = (N) => {
  return range(2, N)
    .reduce(
      (acc, curr) => isFactorOf(curr, N) && isPrime(curr) ? acc.concat([curr]) : acc
    , []
    )
}

const answer = Math.max.apply(
  this,
  getPrimeFactors(600851475143)
)

console.log(answer)

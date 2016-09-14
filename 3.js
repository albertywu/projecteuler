const naturals = n => {
  let result = []
  for (let i = 2; i <= n; i++) {
    result.push(i)
  }
  return result
}

const isFactorOf = (x, N) => N % x === 0

// brute-force check of prime-ness
const isPrime = (x) => {
  const tests = naturals(Math.floor(x/2))
  for (let i = 0; i < tests.length; i++) {
    if (x % tests[i] === 0)
      return false
  }
  return true
}

// (N: number) => number[]
const getPrimeFactors = (N) => {
  return naturals(N)
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

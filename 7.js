const isPrime = require('./utils/isPrime')

// (n: number) => number
getNextPrime = (n) => {
  let nextPrime = null
  while (true) {
    n = n + 1
    if (isPrime(n)) {
      return n
    }
  }
}

// (N: number) => number
getNthPrime = (N) => {
  let current = 2
  let n = 1

  while (n < N) {
    current = getNextPrime(current)
    n = n + 1
  }

  return current
}

console.log(getNthPrime(10001))
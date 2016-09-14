// https://projecteuler.net/problem=7

// use sieve of eratosthenes
// double the size of the sieve until sieve.length >= N.
// then simply pluck out the Nth element in the sieve!

const sieve = require('sieve')

const getNthPrime = (N) => {
  let n = 1
  let primes = []
  // keep doubling size of sieve until sieve length >= N
  while (true) {
    primes = sieve(n)
    if (primes.length >= N) {
      return primes[N-1]
    }
    n = n * 2
  }
}

// 5ms solution!
const answer = getNthPrime(10001)

console.log(answer)


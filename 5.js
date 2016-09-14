// https://projecteuler.net/problem=5

const range = require('./utils/range')

// returns smallest number that is evenly divisible by all numbers in divisors
// (divisors: number[])
const getSmallestN = (divisors) => {
  let smallest = 1
  while (true) {
    if (
      divisors.every(d => smallest % d === 0)
    ) {
      return smallest
    }
    smallest++
  }
}

const answer = getSmallestN(range(1, 20))

// 232792560
console.log(answer)

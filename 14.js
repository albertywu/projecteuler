// https://projecteuler.net/problem=14

const range = require('./utils/range')
const max = require('lodash.max')

// cache the collatz sequences so we can re-use prior work!
// { number => number[] }
const cache = {}

const getNext = n => n % 2 === 0 ? n/2 : 3*n+1

const last = arr => arr[arr.length - 1]

// (number: n) => number[]
const getCollatz = (n) => {
  let result = [n]

  while (last(result) !== 1) {
    let next = getNext(last(result))
    if (cache[next]) {
      result = result.concat(cache[next])
      break
    }
    result.push(next)
  }

  cache[n] = result
  return result
}

const solve = () => {
  const tests = range(1, 999999).reverse() // 999999 -> 1

  const lengths = tests.map(n => getCollatz(n).length)
  const largest = max(lengths)
  const idx = lengths.findIndex(_ => _ === largest)

  return tests[idx]
}

console.log(
  solve()
)
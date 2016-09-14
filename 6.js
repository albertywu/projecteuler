// https://projecteuler.net/problem=6
const range = require('./utils/range')

const sumOfSquares = n => range(1, n)
  .reduce(
    (acc, curr) => acc + Math.pow(curr, 2)
  , 0)

const squareOfSum = n => {
  const sum = range(1, n)
    .reduce(
      (acc, curr) => acc + curr
    , 0)

  return Math.pow(sum, 2)
}

const answer = squareOfSum(100) - sumOfSquares(100)

console.log(answer)
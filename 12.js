// https://projecteuler.net/problem=12

const range = require('./utils/range')

// (as: number[]) => number
const getLast = (as) => as[as.length - 1] || 0

// (n: number) => number[]
// const getTriangleNumbers = (n) => {
//   let numbers = []
//   range(1, n)
//     .forEach(n => numbers.push(n + getLast(numbers)))
//   return numbers
// }

// (n: number) => number[]
const getDivisors = (n) => {
  let factors = []
  range(1, Math.floor(Math.sqrt(n)))
    .forEach(i => {
      if (n % i === 0) {
        factors.push(i)
        if (n % n / i === 0) {
          factors.push(n / i)
        }
      }
    })
  return factors.sort((a,b) => a-b)
}

// (n: number) => n
const getTriangleNumberWithGreaterNDivisors = (N) => {
  let ts = []
  let i = 1
  while (true) {
    let nextT = getLast(ts) + i
    ts.push(nextT)
    if (
      getDivisors(nextT).length > N
    ) {
      return nextT
    }
    i = i + 1
  }
}

console.log(
  getTriangleNumberWithGreaterNDivisors(500)
)
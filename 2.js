// https://projecteuler.net/problem=2

const sumPreviousTwo = (x) => x[x.length - 1] + x[x.length - 2]

// (n: number) => number[]
const getFibsLessThan = (n) => {
  let fibs = [1,2]
  while (sumPreviousTwo(fibs) < n) {
    fibs.push(sumPreviousTwo(fibs))
  }
  return fibs
}

const fibs = getFibsLessThan(4000000)

const answer = fibs
  .reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0)

console.log(answer)
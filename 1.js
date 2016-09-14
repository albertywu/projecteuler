// https://projecteuler.net/problem=1

isMultiple3or5 = (n) => (n % 3 === 0) || (n % 5 === 0)

naturals = (n) => Array.from(new Array(n), (x, i) => i + 1)

let answer = naturals(999)
  .reduce(
    (acc, curr) => isMultiple3or5(curr) ? acc + curr : acc
    , 0
  )

console.log(answer)
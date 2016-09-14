// https://projecteuler.net/problem=9

require('./utils/max')
require('./utils/min')

const solve = () => {
  for (let a = 1; a <= 1000; a++) {
    for (let b = 1; b <= 1000; b++) {
      if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(1000-a-b, 2)) {
        return [
          [a,b].min(),
          [a,b].max()
        ]
      }
    }
  }
}

[a, b] = solve()

console.log(a * b * (1000 - a - b))
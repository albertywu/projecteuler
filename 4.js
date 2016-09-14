// https://projecteuler.net/problem=4

// (from: number, to: number) => number[]
const range = (from, to) => Array.from(new Array(to-from+1), (x, i) => from + i)

// (n: number) => boolean
const isPalindrome = (n) => {
  const letters = String(n).split('')
  const toIdx = Math.floor(letters.length / 2)
  let idx = 0

  while (idx < toIdx) {
    if (letters[idx] !== letters[letters.length - 1 - idx]) {
      return false
    }
    idx = idx + 1
  }
  return true
}

// (as: number[]) => number[]
const products = (as) => {
  let result = []
  let count = 0
  for (var i = 0; i < as.length; i++) {
    for (var j = 0; j < as.length; j++) {
      if (isPalindrome(as[i] * as[j])) {
        result.push(as[i] * as[j])
      }
    }
  }
  return result
}

const allProducts = products(
  range(100, 999)
)

const answer = allProducts.sort((a, b) => a - b)[allProducts.length - 1]

// 906609
console.log(answer)

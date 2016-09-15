// https://projecteuler.net/problem=15

// ex: 3x3 matrix
// [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null]
// ]
// make empty N x N matrix
function makeMatrix(N) {
  return Array.from(
    new Array(N), () => new Array(N).fill(null)
  )
}

// returns true if any cell in the matrix is null
// (matrix: number[][]) => boolean
function isAnyNull(matrix) {
  return matrix
    .map(row => row.reduce((acc, curr) => acc || curr === null, false))
    .includes(true)
}

// (N: number) => { M: number[][], numPaths: number}
function paths(N) {
  const M = makeMatrix(N)

  // keep filling in values until matrix has values for all slots
  while (isAnyNull(M)) {
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (y === 0 || x === 0) {
          M[y][x] = 1
        }
        // if (y, x) contains a value at (y-1, x) AND (y, x-1), set value at (y, x) to M[y-1][x] + M[y][x-1]
        if (M[y-1] && M[y - 1][x] && M[y][x - 1]) {
          M[y][x] = M[y - 1][x] + M[y][x - 1]
        }
      }
    }
  }
  return {
    M,
    numPaths: M[N - 1][N - 1]
  }
}

function solve(N) { return paths(N + 1) }

console.log(
  solve(20) // 137846528820
)
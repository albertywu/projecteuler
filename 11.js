const fs = require('fs')
const max = require('./utils/max')
const range = require('./utils/range')

// (void) => Promise<number[][]>
function getData() {
  return new Promise(function(resolve, reject) {
    fs.readFile('./inputs/11.txt', (err, data) => {
      resolve(
        data
          .toString()
          .split("\n")
          .map(line => line.split(' ').map(Number))
      )
    })
  })
}

// each path is [deltaY, deltaX]
const PATHS = {
  'N': [-1, 0],
  'E': [0, 1],
  'S': [1, 0],
  'W': [0, -1],
  'NE': [-1, 1],
  'SE': [1, 1],
  'SW': [1, -1],
  'NW': [-1, -1]
}

const DISTANCE = 3

const getProduct = (y, x, arr, direction, distance) => {
  const values = [arr[y][x]]
  for (let i = 1; i <= distance; i++) {
    let yStep = PATHS[direction][0] * i
    let xStep = PATHS[direction][1] * i
    let nextX
    let nextY
    if (arr[y+yStep] === undefined) {
      values.push(null)
    } else if (arr[y+yStep][x+xStep] === undefined) {
      values.push(null)
    } else {
      values.push(arr[y+yStep][x+xStep])
    }
  }
  return values.reduce((acc, curr) => acc * (curr || 0), 1)
}

const getMaxProduct = (y, x, arr, distance) => {
  return Object.keys(PATHS)
    .map(direction => getProduct(y, x, arr, direction, distance))
    .max()
}

const solveMatrix = (arr, distance) => {
  let productMatrix = Array.from(new Array(arr.length), (x, i) => new Array(arr[0].length))

  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[0].length; x++) {
      productMatrix[y][x] = getMaxProduct(x, y, arr, distance)
    }
  }

  return productMatrix
    .map(rows => rows.max())
    .max()
}

getData()
  .then(arr => {
    console.log(
      solveMatrix(arr, DISTANCE)
    )
  })


const fs = require('fs')

// (void) => Promise<number[][]>
function getData() {
  return new Promise(function(resolve, reject) {
    fs.readFile('./inputs/13.txt', (err, data) => {
      resolve(
        data
          .toString()
          .split("\n")
          .map(Number)
      )
    })
  })
}

getData()
  .then(numbers => {
    console.log(
      numbers
      .reduce((acc, curr) => acc + curr, 0)
    )
  }
)
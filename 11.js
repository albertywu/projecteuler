const fs = require('fs')

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

getData()
.then(_ => console.log(_.map(_ => _.length)))
// https://projecteuler.net/problem=15

const isRouteToEast = (y, x, N) => x < N
const isRouteToSouth = (y, x, N) => y < N

// returns the # of routes in a lattice from (0,0) to (N,N)
// valid routes are in the "east" or "south" direction
//
// (y: number, x: number, N: number) => number
const numRoutes = (y, x, N) => {
  if (y === N && x === N) {
    return 0 // we're home!
  }

  let numRoutesToEast = isRouteToEast(y, x, N) ? 1 + numRoutes(y, x + 1, N) : 0
  let numRoutesToSouth = isRouteToSouth(y, x, N) ? 1 + numRoutes(y + 1, x, N) : 0

  return numRoutesToEast + numRoutesToSouth
}

console.log(
  numRoutes(0, 0, 1)
)
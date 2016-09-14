const range = (from, to) => Array.from(new Array(to-from+1), (v, k) => k+from)

module.exports = range

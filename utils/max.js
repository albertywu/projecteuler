// make max method fluent on instances of Array
// [100, -100, 1000, -1000, 0].max() => 1000

Array.prototype.max = function() {
  return Math.max.apply(null, this)
}
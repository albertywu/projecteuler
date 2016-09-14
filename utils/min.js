// make min method fluent on instances of Array
// [100, -100, 1000, -1000, 0].min() => -1000

Array.prototype.min = function() {
  return Math.min.apply(null, this)
}
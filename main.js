function toTheFuture (a, b, c) {
  var squaredA = Math.pow(a, 2);
  var squaredB = Math.pow(b, 2);
  var squaredC = Math.pow(c, 2);
  sum = squaredA + squaredB + squaredC;
  return sum;
}

module.exports = {
  toTheFuture
};

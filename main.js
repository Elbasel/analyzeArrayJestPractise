function analyzeArray(array) {
  return {
    average: array.reduce((prev, curr) => prev + curr, 0) / array.length,
    min: array.reduce((prev, curr) => (curr < prev ? curr : prev)),
    max: array.reduce((prev, curr) => (curr < prev ? prev : curr)),
    length: array.length,
  };
}

module.exports = analyzeArray;

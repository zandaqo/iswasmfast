function generateData(slope, intercept, length, isTyped) {
  const y = isTyped ? new Float64Array(length) : new Array(length);
  const x = isTyped ? new Float64Array(length) : new Array(length);
  for (let i = 0; i < length; i++) {
    x[i] = Math.floor((Math.random() * 100));
    y[i] = intercept + (slope * x[i]);
  }
  return [y, x];
}

module.exports = (regression) => {
  describe('Regression', () => {
    it('does a simple linear regression on provided data', () => {
      expect(regression(...generateData(2, 3, 100))).toEqual([2, 3, 1]);
      expect(regression(...generateData(2, 3, 100, true))).toEqual([2, 3, 1]);
      expect(regression(...generateData(5, 1, 100))).toEqual([5, 1, 1]);
      expect(regression(...generateData(1, 0, 100))).toEqual([1, 0, 1]);
    });
  });
};

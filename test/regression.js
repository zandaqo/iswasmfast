function generateData(slope, intercept, length, isTyped) {
  const y = isTyped ? new Float64Array(length) : new Array(length);
  const x = isTyped ? new Float64Array(length) : new Array(length);
  for (let i = 0; i < length; i++) {
    x[i] = Math.floor(Math.random() * 100);
    y[i] = intercept + slope * x[i];
  }
  return [y, x];
}

module.exports = (instance) => {
  it("does a simple linear regression on provided data", () => {
    expect(instance.regression(...generateData(2, 3, 100))).toEqual({
      slope: 2,
      intercept: 3,
      r2: 1,
    });
    expect(instance.regression(...generateData(2, 3, 100, true))).toEqual({
      slope: 2,
      intercept: 3,
      r2: 1,
    });
    expect(instance.regression(...generateData(5, 1, 100))).toEqual({
      slope: 5,
      intercept: 1,
      r2: 1,
    });
    expect(instance.regression(...generateData(1, 0, 100))).toEqual({
      slope: 1,
      intercept: 0,
      r2: 1,
    });
  });
};

/* eslint-disable no-mixed-operators */

function linearRegression(y, x) {
  const n = y.length;
  let sumX = 0;
  let sumY = 0;
  let sumXy = 0;
  let sumXx = 0;
  let sumYy = 0;

  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXy += (x[i] * y[i]);
    sumXx += (x[i] * x[i]);
    sumYy += (y[i] * y[i]);
  }

  const slope = (n * sumXy - sumX * sumY) / (n * sumXx - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  const r2 = ((n * sumXy - sumX * sumY) /
    Math.sqrt((n * sumXx - sumX * sumX) * (n * sumYy - sumY * sumY))) ** 2;

  return [slope, intercept, r2];
}

module.exports = linearRegression;

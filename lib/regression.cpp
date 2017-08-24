#include <vector>
#include <math.h>

std::vector<double> regression(std::vector<double> y, std::vector<double> x) {
  const size_t n = y.size();
  double sumX = 0;
  double sumY = 0;
  double sumXy = 0;
  double sumXx = 0;
  double sumYy = 0;

  for (size_t i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXy += (x[i] * y[i]);
    sumXx += (x[i] * x[i]);
    sumYy += (y[i] * y[i]);
  }

  const double slope = (n * sumXy - sumX * sumY) / (n * sumXx - sumX * sumX);
  const double intercept = (sumY - slope * sumX) / n;
  const double r2 = pow((n * sumXy - sumX * sumY) /
    sqrt((n * sumXx - sumX * sumX) * (n * sumYy - sumY * sumY)), 2);

  return std::vector<double>{ slope, intercept, r2 }
}

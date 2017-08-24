#include <vector>
#include <numeric>
#include <math.h>

std::vector<double> regression(std::vector<double> y, std::vector<double> x) {
  const size_t n = y.size();
  double sumX = std::accumulate(x.begin(), x.end(), 0.0);
  double sumY = std::accumulate(y.begin(), y.end(), 0.0);
  double sumXy = std::inner_product(x.begin(), x.end(), y.begin(), 0.0);
  double sumXx = std::inner_product(x.begin(), x.end(), x.begin(), 0.0);
  double sumYy = std::inner_product(y.begin(), y.end(), y.begin(), 0.0);

  const double slope = (n * sumXy - sumX * sumY) / (n * sumXx - sumX * sumX);
  const double intercept = (sumY - slope * sumX) / n;
  const double r2 = pow((n * sumXy - sumX * sumY) /
    sqrt((n * sumXx - sumX * sumX) * (n * sumYy - sumY * sumY)), 2);

  return std::vector<double>{ slope, intercept, r2 };
}

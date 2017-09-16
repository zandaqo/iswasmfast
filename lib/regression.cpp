#include <vector>
#include <numeric>
#include <math.h>

struct FitLine {
  double slope;
  double intercept;
  double r2;
};

FitLine regression(std::vector<double> y, std::vector<double> x) {
  const size_t n = y.size();
  const double sumX = std::accumulate(x.begin(), x.end(), 0.0);
  const double sumY = std::accumulate(y.begin(), y.end(), 0.0);
  const double sumXy = std::inner_product(x.begin(), x.end(), y.begin(), 0.0);
  const double sumXx = std::inner_product(x.begin(), x.end(), x.begin(), 0.0);
  const double sumYy = std::inner_product(y.begin(), y.end(), y.begin(), 0.0);

  FitLine result;
  result.slope = (n * sumXy - sumX * sumY) / (n * sumXx - sumX * sumX);
  result.intercept = (sumY - result.slope * sumX) / n;
  result.r2 = pow((n * sumXy - sumX * sumY) /
    sqrt((n * sumXx - sumX * sumX) * (n * sumYy - sumY * sumY)), 2);

  return result;
}

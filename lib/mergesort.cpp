#include <iterator>
#include <algorithm>
#include <functional>

template <typename BidirIt, typename Compare = std::less<>>
void mergesort(BidirIt first, BidirIt last, Compare cmp = Compare {}) {
  const auto n = std::distance(first, last);

  if (n > 1) {
    const auto middle = std::next(first, n / 2);

    mergesort(first, middle, cmp);
    mergesort(middle, last, cmp);

    std::inplace_merge(first, middle, last, cmp);
  }
}

#include <vector>
#include <iterator>
#include <emscripten/bind.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/mergesort.cpp"
#include "../lib/dotproduct.cpp"
#include "../lib/fermat.cpp"
#include "../lib/regression.cpp"

using namespace emscripten;

void ms(val v) {
  auto length = v["length"].as<unsigned>();
  std::vector<double> vec = vecFromJSArray<double>(v);

  mergesort(std::begin(vec), std::end(vec));

  for (int i = 0; i < length; i++) {
    v.set(i, vec[i]);
  }
}

double dp(const val& a, const val& b) {
  std::vector<double> v1 = vecFromJSArray<double>(a);
  std::vector<double> v2 = vecFromJSArray<double>(b);
  return dotproduct(v1, v2);
}

val slr(const val& a, const val& b) {
    auto y = vecFromJSArray<double>(a);
    auto x = vecFromJSArray<double>(b);
    auto result = regression(y, x);
    val r(val::array());
    r.set(0, val(result[0]));
    r.set(1, val(result[1]));
    r.set(2, val(result[2]));
    return r;
}

EMSCRIPTEN_BINDINGS(my_module) {
  function("levenstein", &levenstein);
  function("fibonacci", &fibonacci);
  function("mergesort", &ms);
  function("dotproduct", &dp);
  function("fermat", &isPrime);
  function("regression", &slr);
}

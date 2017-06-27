#include <vector>
#include <iterator>
#include <emscripten/bind.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/mergesort.cpp"
#include "../lib/dotproduct.cpp"

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

EMSCRIPTEN_BINDINGS(my_module) {
  function("levenstein", &levenstein);
  function("fibonacci", &fibonacci);
  function("mergesort", &ms);
  function("dotproduct", &dp);
}

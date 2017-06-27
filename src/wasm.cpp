#include <vector>
#include <iterator>
#include <emscripten/bind.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/mergesort.cpp"
#include "../lib/dotproduct.cpp"

using namespace emscripten;

void ms(val v) {
  unsigned length = v["length"].as<unsigned>();
  std::vector<double> vec;
  for (int i = 0; i < length; i++) {
    vec.push_back(v[i].as<double>());
  }

  mergesort(std::begin(vec), std::end(vec));

  for (int i = 0; i < length; i++) {
    v.set(i, vec[i]);
  }
}

double dp(val a, val b) {
  unsigned length = a["length"].as<unsigned>();
  std::vector<double> v1;
  std::vector<double> v2;
  for (int i = 0; i < length; i++) {
    v1.push_back(a[i].as<double>());
    v2.push_back(b[i].as<double>());
  }

  return dotproduct(v1, v2);
}

EMSCRIPTEN_BINDINGS(my_module) {
  function("levenstein", &levenstein);
  function("fibonacci", &fibonacci);
  function("mergesort", &ms);
  function("dotproduct", &dp);
}

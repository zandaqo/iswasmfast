#include <vector>
#include <iterator>
#include <emscripten/bind.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/mergesort.cpp"

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

EMSCRIPTEN_BINDINGS(my_module) {
  function("levenstein", &levenstein);
  function("fibonacci", &fibonacci);
  function("mergesort", &ms);
}

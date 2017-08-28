#include <vector>
#include <iterator>
#include <emscripten/bind.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/fermat.cpp"
#include "../lib/regression.cpp"

using namespace emscripten;

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
  function("fermat", &isPrime);
  function("regression", &slr);
}

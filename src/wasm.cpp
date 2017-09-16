#include <vector>
#include <iterator>
#include <emscripten/bind.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/fermat.cpp"
#include "../lib/regression.cpp"
#include "../lib/sha256.cpp"

using namespace emscripten;

val slr(const val& a, const val& b) {
    auto y = vecFromJSArray<double>(a);
    auto x = vecFromJSArray<double>(b);
    auto result = regression(y, x);
    val r(val::object());
    r.set("slope", val(result.slope));
    r.set("intercept", val(result.intercept));
    r.set("r2", val(result.r2));
    return r;
}

EMSCRIPTEN_BINDINGS(my_module) {
  emscripten::function("levenstein", &levenstein);
  emscripten::function("fibonacci", &fibonacci);
  emscripten::function("fermat", &isPrime);
  emscripten::function("regression", &slr);
  emscripten::function("sha256", &SHA256);
}

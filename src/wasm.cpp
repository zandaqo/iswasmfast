#include <vector>
#include <iterator>
#include <emscripten/bind.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/fermat.cpp"
#include "../lib/regression.cpp"
#include "../lib/sha256.cpp"

using namespace emscripten;

std::vector<double> vecFromArray(const val &arr) {
  unsigned int length = arr["length"].as<unsigned int>();
  std::vector<double> vec(length);
  val memory = val::module_property("buffer");
  val memoryView = val::global("Float64Array").new_(memory, reinterpret_cast<std::uintptr_t>(vec.data()), length);

  vec.reserve(length);
  memoryView.call<void>("set", arr);
  return vec;
}

val slr(const val& a, const val& b) {
    auto y = vecFromArray(a);
    auto x = vecFromArray(b);
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

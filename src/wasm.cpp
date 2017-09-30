#include <vector>
#include <iterator>
#include <emscripten/bind.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/fermat.cpp"
#include "../lib/regression.cpp"
#include "../lib/sha256.cpp"

using namespace emscripten;

std::vector<double> vecFromTypedArray(const val &typedArray) {
  unsigned int length = typedArray["length"].as<unsigned int>();
  std::vector<double> vec(length);
  val memory = val::module_property("buffer");
  val memoryView = typedArray["constructor"].new_(memory, reinterpret_cast<std::uintptr_t>(vec.data()), length);

  vec.reserve(length);
  memoryView.call<void>("set", typedArray);
  return vec;
}

val slr(const val& a, const val& b) {
    auto y = a["buffer"].typeof().as<std::string>() == "object" ? vecFromTypedArray(a) : vecFromJSArray<double>(a);
    auto x = b["buffer"].typeof().as<std::string>() == "object" ? vecFromTypedArray(b) : vecFromJSArray<double>(b);
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

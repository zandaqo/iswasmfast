#include <assert.h>
#include <string>
#include <napi.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/mergesort.cpp"
#include "../lib/dotproduct.cpp"

using namespace Napi;

Value Levenstein(const CallbackInfo& info) {
  assert(info[0].IsString());
  std::string word = info[0].As<String>().Utf8Value();
  std::string reference = info[1].As<String>().Utf8Value();
  auto result = levenstein(word, reference);
  return Number::New(info.Env(), result);
}

Value Fibonacci(const CallbackInfo& info) {
  assert(info[0].IsNumber());
  unsigned int n = info[0].As<Number>().Uint32Value();
  auto result = fibonacci(n);
  return Number::New(info.Env(), result);
}

Value Mergesort(const CallbackInfo& info) {
  assert(info[0].IsTypedArray());
  Float64Array a = info[0].As<Float64Array>();
  size_t s = a.ElementLength();
  auto data = a.Data();
  std::vector<double> v(data, data + s);

  mergesort(std::begin(v), std::end(v));

  auto r = Float64Array::New(info.Env(), s);
  for (size_t i = 0; i < s; i++) {
      r[i] = v[i];
  }
  return r;
}

Value Dotproduct(const CallbackInfo& info) {
  assert(info[0].IsTypedArray());
  Float64Array a = info[0].As<Float64Array>();
  Float64Array b = info[1].As<Float64Array>();
  size_t s = a.ElementLength();
  auto dataA = a.Data();
  auto dataB = b.Data();
  std::vector<double> v1(dataA, dataA + s);
  std::vector<double> v2(dataB, dataB + s);
  double product = dotproduct(v1, v2);

  return Number::New(info.Env(), product);
}

void Init(Env env, Object exports, Object module) {
	exports.Set("levenstein", Function::New(env, Levenstein));
	exports.Set("fibonacci", Function::New(env, Fibonacci));
	exports.Set("mergesort", Function::New(env, Mergesort));
	exports.Set("dotproduct", Function::New(env, Dotproduct));
}

NODE_API_MODULE(addon, Init)

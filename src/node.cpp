#include <assert.h>
#include <string>
#include <napi.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/mergesort.cpp"
#include "../lib/dotproduct.cpp"

using namespace Napi;

Value vectorToArray(const napi_env& Env, const std::vector<double>& v) {
  auto result = Array::New(Env);
  for (size_t i = 0; i < v.size(); i++) {
    result[i] = Number::New(Env, v[i]);
  }
  return result;
}

std::vector<double> arrayToVector(const Array& a) {
  auto length = a.Length();
  std::vector<double> result;
  for (size_t i = 0; i < length; i++) {
    result.emplace_back(a[i].As<Number>().DoubleValue());
  }
  return result;
}

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
  assert(info[0].IsArray());
  auto v = arrayToVector(info[0].As<Array>());
  mergesort(std::begin(v), std::end(v));
  return vectorToArray(info.Env(), v);
}

Value Dotproduct(const CallbackInfo& info) {
  assert(info[0].IsArray());
  auto a = arrayToVector(info[0].As<Array>());
  auto b = arrayToVector(info[1].As<Array>());
  double product = dotproduct(a, b);

  return Number::New(info.Env(), product);
}

void Init(Env env, Object exports, Object module) {
	exports.Set("levenstein", Function::New(env, Levenstein));
	exports.Set("fibonacci", Function::New(env, Fibonacci));
	exports.Set("mergesort", Function::New(env, Mergesort));
	exports.Set("dotproduct", Function::New(env, Dotproduct));
}

NODE_API_MODULE(addon, Init)

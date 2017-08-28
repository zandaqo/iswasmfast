#include <assert.h>
#include <string>
#include <napi.h>
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/fermat.cpp"
#include "../lib/regression.cpp"

using namespace Napi;

Value vectorToArray(const napi_env& Env, const std::vector<double>& v) {
  auto result = Array::New(Env);
  for (size_t i = 0; i < v.size(); i++) {
    result[i] = Number::New(Env, v[i]);
  }
  return result;
}

std::vector<double> convertToVector (const Array& a) {
  auto length = a.Length();
  std::vector<double> result;
  for (size_t i = 0; i < length; i++) {
    result.emplace_back(a[i].As<Number>().DoubleValue());
  }
  return result;
}

std::vector<double> convertToVector (const Float64Array& a) {
  size_t s = a.ElementLength();
  auto data = a.Data();
  return std::vector<double>(data, data + s);
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

Value Fermat(const CallbackInfo& info) {
  assert(info[0].IsNumber());
  unsigned int n = info[0].As<Number>().Uint32Value();
  unsigned int k = info[1].As<Number>().Uint32Value();
  auto result = isPrime(n, k);
  return Boolean::New(info.Env(), result);
}

Value Regression(const CallbackInfo& info) {
  auto y = info[0].IsTypedArray() ? convertToVector(info[0].As<Float64Array>()) :
    convertToVector(info[0].As<Array>());
  auto x = info[1].IsTypedArray() ? convertToVector(info[1].As<Float64Array>()) :
    convertToVector(info[1].As<Array>());
  auto result = regression(y, x);

  return vectorToArray(info.Env(), result);
}

void Init(Env env, Object exports, Object module) {
  exports.Set("levenstein", Function::New(env, Levenstein));
  exports.Set("fibonacci", Function::New(env, Fibonacci));
  exports.Set("fermat", Function::New(env, Fermat));
  exports.Set("regression", Function::New(env, Regression));
}

NODE_API_MODULE(addon, Init)

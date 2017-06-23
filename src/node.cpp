#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include <assert.h>
#include <napi.h>
#include <string>

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

void Init(Env env, Object exports, Object module) {
	exports.Set("levenstein", Function::New(env, Levenstein));
	exports.Set("fibonacci", Function::New(env, Fibonacci));
}

NODE_API_MODULE(addon, Init)
#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include <emscripten.h>

using namespace std;

extern "C" {
	unsigned int EMSCRIPTEN_KEEPALIVE _levenstein(const char* word, const char* reference) {
		string wordString(word);
		string referenceString(reference);
		return levenstein(wordString, referenceString);
	}
	
	unsigned int EMSCRIPTEN_KEEPALIVE _fibonacci(const int n) {
		return fibonacci(n);
	}
}

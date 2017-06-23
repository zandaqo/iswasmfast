#include "../lib/levenstein.cpp"
#include "../lib/fibonacci.cpp"
#include "../lib/mergesort.cpp"
#include <iterator>
#include <vector>
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

	void EMSCRIPTEN_KEEPALIVE _mergesort(double *a, int length) {
	    std::vector<double> v;
        for (int i = 0; i < length; i++) {
            v.push_back(a[i]);
        }
	    mergesort(std::begin(v), std::end(v));
        for (int i = 0; i < length; i++) {
            a[i] = v[i];
        }
	}
}

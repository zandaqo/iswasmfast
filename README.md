# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

Read more in [JavaScript ♥ C++: Modern Ways to Use C++ in JavaScript Projects](https://medium.com/@zandaqo/javascript-c-modern-ways-to-use-c-in-javascript-projects-a19003c5a9ff) 

## Benchmark
```
> node benchmark.js

   Native x 118,593 ops/sec ±0.82% (86 runs sampled)
   N-API Addon x 234,572 ops/sec ±0.69% (88 runs sampled)
   Web Assembly x 168,301 ops/sec ±1.79% (87 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,762,375 ops/sec ±0.94% (90 runs sampled)
   N-API Addon x 3,427,021 ops/sec ±1.06% (90 runs sampled)
   Web Assembly x 8,681,072 ops/sec ±0.91% (87 runs sampled)
 Fastest is Web Assembly

Fermat Primality Test:
   Native x 1,859,512 ops/sec ±0.77% (88 runs sampled)
   N-API Addon x 1,762,158 ops/sec ±0.80% (89 runs sampled)
   Web Assembly x 2,818,851 ops/sec ±0.66% (89 runs sampled)
 Fastest is Web Assembly

Simple Linear Regression:
   Native x 226,197 ops/sec ±0.79% (85 runs sampled)
   N-API Addon x 4,976 ops/sec ±1.05% (88 runs sampled)
   N-API Addon using TypedArrays x 94,794 ops/sec ±0.91% (89 runs sampled)
   Web Assembly x 32,376 ops/sec ±1.03% (88 runs sampled)
   Web Assembly using TypedArrays x 34,593 ops/sec ±0.98% (87 runs sampled)
 Fastest is Native

SHA256:
   Native x 16,274 ops/sec ±1.49% (87 runs sampled)
   N-API Addon x 62,837 ops/sec ±1.68% (89 runs sampled)
   Web Assembly x 32,291 ops/sec ±1.06% (88 runs sampled)
 Fastest is N-API Addon
```

## Installation
Please note that this module requires Node.js 8.6 and above. If you want to rebuild the WebAssembly module
yourself, you'll also need the latest Emscripten SDK installed on your machine.

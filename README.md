# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)
[![Travis branch](https://img.shields.io/travis/zandaqo/iswasmfast.svg?style=flat-square)](https://travis-ci.org/zandaqo/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

Read more in [JavaScript ♥ C++: Modern Ways to Use C++ in JavaScript Projects](https://medium.com/@zandaqo/javascript-c-modern-ways-to-use-c-in-javascript-projects-a19003c5a9ff) 

## Benchmark
```
> node benchmark.js

Levenstein Distance:
   Native x 153,992 ops/sec ±9.34% (74 runs sampled)
   N-API Addon x 363,932 ops/sec ±8.53% (79 runs sampled)
   Web Assembly x 194,982 ops/sec ±9.49% (72 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 4,987,362 ops/sec ±8.67% (80 runs sampled)
   N-API Addon x 5,010,889 ops/sec ±9.27% (77 runs sampled)
   Web Assembly x 9,676,847 ops/sec ±9.13% (76 runs sampled)
 Fastest is Web Assembly

Fermat Primality Test:
   Native x 2,495,273 ops/sec ±0.16% (96 runs sampled)
   N-API Addon x 2,229,502 ops/sec ±9.11% (76 runs sampled)
   Web Assembly x 3,809,197 ops/sec ±0.08% (97 runs sampled)
 Fastest is Web Assembly

Simple Linear Regression:
   Native x 261,202 ops/sec ±9.46% (75 runs sampled)
   N-API Addon x 4,589 ops/sec ±8.86% (75 runs sampled)
   N-API Addon using TypedArrays x 118,493 ops/sec ±4.44% (94 runs sampled)
   Web Assembly x 35,107 ops/sec ±9.54% (74 runs sampled)
   Web Assembly using TypedArrays x 38,137 ops/sec ±9.32% (74 runs sampled)
 Fastest is Native

SHA256:
   Native x 16,503 ops/sec ±9.53% (71 runs sampled)
   N-API Addon x 59,565 ops/sec ±8.85% (72 runs sampled)
   Web Assembly x 38,657 ops/sec ±9.50% (74 runs sampled)
 Fastest is N-API Addon
```

## Installation
Please note that this module requires Node.js 8.6 and above. If you want to rebuild the WebAssembly module
yourself, you'll also need the latest Emscripten SDK installed on your machine.

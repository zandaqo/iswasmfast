# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)
[![Travis branch](https://img.shields.io/travis/zandaqo/iswasmfast.svg?style=flat-square)](https://travis-ci.org/zandaqo/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

Read more in [JavaScript ♥ C++: Modern Ways to Use C++ in JavaScript Projects](https://medium.com/@zandaqo/javascript-c-modern-ways-to-use-c-in-javascript-projects-a19003c5a9ff) 

## Benchmark
```
> node benchmark.js

Levenstein Distance:
   Native x 209,706 ops/sec ±0.50% (92 runs sampled)
   N-API Addon x 468,656 ops/sec ±2.64% (93 runs sampled)
   Web Assembly x 216,820 ops/sec ±8.49% (95 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 5,531,150 ops/sec ±9.09% (76 runs sampled)
   N-API Addon x 6,263,628 ops/sec ±9.31% (73 runs sampled)
   Web Assembly x 14,391,462 ops/sec ±9.46% (73 runs sampled)
 Fastest is Web Assembly

Fermat Primality Test:
   Native x 2,513,841 ops/sec ±0.09% (97 runs sampled)
   N-API Addon x 2,913,153 ops/sec ±5.23% (89 runs sampled)
   Web Assembly x 3,123,655 ops/sec ±9.51% (86 runs sampled)
 Fastest is Web Assembly

Simple Linear Regression:
   Native x 255,253 ops/sec ±9.81% (72 runs sampled)
   N-API Addon x 4,179 ops/sec ±8.81% (74 runs sampled)
   N-API Addon using TypedArrays x 118,997 ops/sec ±2.63% (95 runs sampled)
   Web Assembly x 39,266 ops/sec ±9.45% (73 runs sampled)
   Web Assembly using TypedArrays x 49,503 ops/sec ±9.17% (76 runs sampled)
 Fastest is Native

SHA256:
   Native x 12,009 ops/sec ±9.20% (73 runs sampled)
   N-API Addon x 77,340 ops/sec ±9.09% (77 runs sampled)
   Web Assembly x 30,375 ops/sec ±8.55% (73 runs sampled)
 Fastest is N-API Addon
```

## Installation
Please note that this module requires Node.js 8.6 and above. If you want to rebuild the WebAssembly module
yourself, you'll also need the latest Emscripten SDK installed on your machine.

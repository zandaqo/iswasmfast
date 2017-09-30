# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

Read more in [JavaScript ♥ C++: Modern Ways to Use C++ in JavaScript Projects](https://medium.com/@zandaqo/javascript-c-modern-ways-to-use-c-in-javascript-projects-a19003c5a9ff) 

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 102,775 ops/sec ±1.12% (87 runs sampled)
   N-API Addon x 209,164 ops/sec ±0.64% (90 runs sampled)
   Web Assembly x 145,086 ops/sec ±1.15% (90 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,776,692 ops/sec ±0.83% (86 runs sampled)
   N-API Addon x 3,329,576 ops/sec ±1.06% (90 runs sampled)
   Web Assembly x 8,420,121 ops/sec ±0.82% (89 runs sampled)
 Fastest is Web Assembly

Fermat Primality Test:
   Native x 1,820,068 ops/sec ±0.90% (90 runs sampled)
   N-API Addon x 1,710,430 ops/sec ±0.66% (89 runs sampled)
   Web Assembly x 2,781,497 ops/sec ±0.65% (88 runs sampled)
 Fastest is Web Assembly

Simple Linear Regression:
   Native x 21,680 ops/sec ±2.19% (89 runs sampled)
   N-API Addon x 4,024 ops/sec ±1.23% (90 runs sampled)
   N-API Addon using TypedArrays x 15,094 ops/sec ±0.86% (85 runs sampled)
   Web Assembly x 1,687 ops/sec ±0.67% (90 runs sampled)
 Fastest is Native

SHA256:
   Native x 6,018 ops/sec ±1.28% (87 runs sampled)
   N-API Addon x 12,243 ops/sec ±1.39% (85 runs sampled)
   Web Assembly x 9,267 ops/sec ±0.72% (88 runs sampled)
 Fastest is N-API Addon
```

## Installation
Please note that this module requires Node.js 8.6 and above. If you want to rebuild the WebAssembly module
yourself, you'll also need the latest Emscripten SDK installed on your machine.

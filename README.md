# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

Read more in [JavaScript ♥ C++: Modern Ways to Use C++ in JavaScript Projects](https://medium.com/@zandaqo/javascript-c-modern-ways-to-use-c-in-javascript-projects-a19003c5a9ff) 

## Benchmark
```
> node benchmark.js

Levenstein Distance:
   Native x 118,191 ops/sec ±0.94% (83 runs sampled)
   N-API Addon x 228,882 ops/sec ±0.89% (89 runs sampled)
   Web Assembly x 139,091 ops/sec ±3.65% (79 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,158,795 ops/sec ±1.81% (81 runs sampled)
   N-API Addon x 2,731,388 ops/sec ±1.67% (83 runs sampled)
   Web Assembly x 6,615,989 ops/sec ±1.78% (81 runs sampled)
 Fastest is Web Assembly

Fermat Primality Test:
   Native x 1,546,993 ops/sec ±1.03% (83 runs sampled)
   N-API Addon x 1,318,161 ops/sec ±2.49% (79 runs sampled)
   Web Assembly x 2,297,521 ops/sec ±2.99% (76 runs sampled)
 Fastest is Web Assembly

Simple Linear Regression:
   Native x 161,016 ops/sec ±3.50% (76 runs sampled)
   N-API Addon x 3,397 ops/sec ±3.71% (72 runs sampled)
   N-API Addon using TypedArrays x 73,713 ops/sec ±2.58% (75 runs sampled)
   Web Assembly x 22,633 ops/sec ±3.35% (78 runs sampled)
   Web Assembly using TypedArrays x 26,032 ops/sec ±2.24% (77 runs sampled)
 Fastest is Native

SHA256:
   Native x 14,166 ops/sec ±3.12% (78 runs sampled)
   N-API Addon x 63,740 ops/sec ±0.81% (84 runs sampled)
   Web Assembly x 32,916 ops/sec ±0.91% (88 runs sampled)
 Fastest is N-API Addon
```

## Installation
Please note that this module requires Node.js 8.6 and above. If you want to rebuild the WebAssembly module
yourself, you'll also need the latest Emscripten SDK installed on your machine.

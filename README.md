# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)
[![Actions Status](https://github.com/zandaqo/iswasmfast/workflows/Build/badge.svg)](https://github.com/zandaqo/iswasmfast/actions)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

Read more in [JavaScript ♥ C++: Modern Ways to Use C++ in JavaScript Projects](https://medium.com/@zandaqo/javascript-c-modern-ways-to-use-c-in-javascript-projects-a19003c5a9ff) 

## Benchmark
```
> node benchmark.js

Levenstein Distance:
   Native x 220,074 ops/sec ±10.21% (61 runs sampled)
   N-API Addon x 248,443 ops/sec ±10.34% (60 runs sampled)
   Web Assembly x 172,538 ops/sec ±10.14% (65 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 4,198,593 ops/sec ±10.09% (62 runs sampled)
   N-API Addon x 4,682,918 ops/sec ±10.37% (63 runs sampled)
   Web Assembly x 7,096,094 ops/sec ±9.21% (77 runs sampled)
 Fastest is Web Assembly

Fermat Primality Test:
   Native x 1,226,967 ops/sec ±8.15% (83 runs sampled)
   N-API Addon x 1,510,370 ops/sec ±8.03% (81 runs sampled)
   Web Assembly x 1,836,486 ops/sec ±9.52% (71 runs sampled)
 Fastest is Web Assembly

Simple Linear Regression:
   Native x 190,596 ops/sec ±8.62% (68 runs sampled)
   N-API Addon x 2,652 ops/sec ±7.40% (59 runs sampled)
   N-API Addon using TypedArrays x 72,366 ops/sec ±10.17% (62 runs sampled)
   Web Assembly x 36,454 ops/sec ±10.55% (61 runs sampled)
   Web Assembly using TypedArrays x 34,243 ops/sec ±9.27% (55 runs sampled)
 Fastest is Native

SHA256:
   Native x 9,597 ops/sec ±19.04% (56 runs sampled)
   N-API Addon x 56,135 ops/sec ±10.13% (61 runs sampled)
   Web Assembly x 27,468 ops/sec ±9.05% (54 runs sampled)
 Fastest is N-API Addon
```

## Installation
Please note that this module requires Node.js 8.6 and above. If you want to rebuild the WebAssembly module
yourself, you'll also need the latest Emscripten SDK installed on your machine.

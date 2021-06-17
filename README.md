# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)
[![Actions Status](https://github.com/zandaqo/iswasmfast/workflows/Build/badge.svg)](https://github.com/zandaqo/iswasmfast/actions)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

Read more in [JavaScript ♥ C++: Modern Ways to Use C++ in JavaScript Projects](https://medium.com/@zandaqo/javascript-c-modern-ways-to-use-c-in-javascript-projects-a19003c5a9ff) 

## Benchmark
```
> node benchmark.js

Levenstein Distance:
   Native x 295,433 ops/sec ±9.40% (72 runs sampled)
   N-API Addon x 308,924 ops/sec ±9.46% (73 runs sampled)
   Web Assembly x 210,776 ops/sec ±9.16% (76 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 4,044,156 ops/sec ±9.88% (61 runs sampled)
   N-API Addon x 5,204,691 ops/sec ±10.09% (62 runs sampled)
   Web Assembly x 11,508,910 ops/sec ±9.31% (74 runs sampled)
 Fastest is Web Assembly

Fermat Primality Test:
   Native x 1,678,845 ops/sec ±9.96% (65 runs sampled)
   N-API Addon x 1,833,692 ops/sec ±9.83% (62 runs sampled)
   Web Assembly x 2,402,964 ops/sec ±10.66% (72 runs sampled)
 Fastest is Web Assembly

Simple Linear Regression:
   Native x 291,985 ops/sec ±9.67% (74 runs sampled)
   N-API Addon x 3,710 ops/sec ±10.16% (66 runs sampled)
   N-API Addon using TypedArrays x 66,902 ops/sec ±8.24% (77 runs sampled)
   Web Assembly x 37,117 ops/sec ±10.07% (62 runs sampled)
   Web Assembly using TypedArrays x 42,521 ops/sec ±10.21% (64 runs sampled)
 Fastest is Native

SHA256:
   Native x 13,453 ops/sec ±15.02% (64 runs sampled)
   N-API Addon x 67,807 ops/sec ±10.24% (64 runs sampled)
   Web Assembly x 34,445 ops/sec ±10.08% (57 runs sampled)
 Fastest is N-API Addon
```

## Installation
Please note that this module requires Node.js 8.6 and above. If you want to rebuild the WebAssembly module
yourself, you'll also need the latest Emscripten SDK installed on your machine.

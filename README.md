# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 106,964 ops/sec ±1.40% (82 runs sampled)
   N-API Addon x 240,387 ops/sec ±1.17% (88 runs sampled)
   Web Assembly x 173,095 ops/sec ±1.04% (89 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,841,369 ops/sec ±0.72% (89 runs sampled)
   N-API Addon x 3,392,103 ops/sec ±0.95% (90 runs sampled)
   Web Assembly x 8,594,914 ops/sec ±0.69% (89 runs sampled)
 Fastest is Web Assembly

Mergesort:
   Native x 3,398 ops/sec ±1.25% (87 runs sampled)
   N-API Addon x 21,519 ops/sec ±0.74% (90 runs sampled)
   Web Assembly x 15,379 ops/sec ±1.51% (86 runs sampled)
 Fastest is N-API Addon

Dot Product:
   Native x 212,818 ops/sec ±0.88% (87 runs sampled)
   N-API Addon x 34,168 ops/sec ±1.25% (89 runs sampled)
   Web Assembly x 16,753 ops/sec ±0.58% (92 runs sampled)
 Fastest is Native

Fermat Primality Test:
   Native x 1,876,136 ops/sec ±0.68% (91 runs sampled)
   N-API Addon x 1,772,131 ops/sec ±0.91% (92 runs sampled)
   Web Assembly x 2,817,864 ops/sec ±0.66% (88 runs sampled)
 Fastest is Web Assembly

Simple Linear Regression:
   Native x 22,532 ops/sec ±1.02% (89 runs sampled)
   N-API Addon x 4,185 ops/sec ±0.69% (88 runs sampled)
   Web Assembly x 1,797 ops/sec ±1.61% (91 runs sampled)
 Fastest is Native
```

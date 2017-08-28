# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 116,722 ops/sec ±1.49% (84 runs sampled)
   N-API Addon x 266,489 ops/sec ±1.17% (89 runs sampled)
   Web Assembly x 186,872 ops/sec ±1.09% (89 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,915,551 ops/sec ±0.74% (91 runs sampled)
   N-API Addon x 3,377,404 ops/sec ±1.40% (89 runs sampled)
   Web Assembly x 8,760,322 ops/sec ±0.61% (92 runs sampled)
 Fastest is Web Assembly

Fermat Primality Test:
   Native x 1,900,493 ops/sec ±0.75% (92 runs sampled)
   N-API Addon x 1,749,936 ops/sec ±1.04% (90 runs sampled)
   Web Assembly x 2,850,921 ops/sec ±0.86% (88 runs sampled)
 Fastest is Web Assembly

Simple Linear Regression:
   Native x 22,969 ops/sec ±0.66% (89 runs sampled)
   N-API Addon x 4,165 ops/sec ±1.26% (89 runs sampled)
   Web Assembly x 1,777 ops/sec ±0.95% (91 runs sampled)
 Fastest is Native

Simple Linear Regression with TypedArrays:
   Native x 13,849 ops/sec ±1.69% (85 runs sampled)
   N-API Addon x 17,698 ops/sec ±1.17% (88 runs sampled)
   Web Assembly x 1,710 ops/sec ±2.00% (91 runs sampled)
 Fastest is N-API Addon
```

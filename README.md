# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 116,201 ops/sec ±1.55% (86 runs sampled)
   N-API Addon x 266,459 ops/sec ±0.88% (91 runs sampled)
   Web Assembly x 178,429 ops/sec ±2.43% (88 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 4,007,847 ops/sec ±0.72% (89 runs sampled)
   N-API Addon x 3,504,125 ops/sec ±0.63% (87 runs sampled)
   Web Assembly x 8,835,944 ops/sec ±0.95% (92 runs sampled)
 Fastest is Web Assembly

Fermat Primality Test:
   Native x 1,917,890 ops/sec ±0.86% (93 runs sampled)
   N-API Addon x 1,757,090 ops/sec ±1.17% (91 runs sampled)
   Web Assembly x 2,906,964 ops/sec ±1.00% (92 runs sampled)
 Fastest is Web Assembly

Simple Linear Regression:
   Native x 23,173 ops/sec ±1.40% (91 runs sampled)
   N-API Addon x 4,334 ops/sec ±0.97% (91 runs sampled)
   N-API Addon using TypedArrays x 17,325 ops/sec ±1.58% (84 runs sampled)
   Web Assembly x 1,769 ops/sec ±2.08% (89 runs sampled)
 Fastest is Native
```

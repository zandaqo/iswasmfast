# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 67,110 ops/sec ±1.55% (82 runs sampled)
   N-API Addon x 255,967 ops/sec ±0.67% (87 runs sampled)
   WASM x 178,456 ops/sec ±0.98% (89 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,294,990 ops/sec ±1.65% (90 runs sampled)
   N-API Addon x 4,438,011 ops/sec ±0.70% (89 runs sampled)
   WASM x 7,291,569 ops/sec ±1.46% (87 runs sampled)
 Fastest is WASM

Mergesort:
   Native x 3,450 ops/sec ±2.04% (85 runs sampled)
   N-API Addon x 20,706 ops/sec ±0.72% (91 runs sampled)
   WASM x 12,633 ops/sec ±2.04% (87 runs sampled)
 Fastest is N-API Addon

Dot Product:
   Native x 97,649 ops/sec ±0.88% (90 runs sampled)
   N-API Addon x 34,294 ops/sec ±1.17% (88 runs sampled)
   WASM x 13,057 ops/sec ±0.61% (91 runs sampled)
 Fastest is Native
```

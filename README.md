# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 55,103 ops/sec ±1.27% (86 runs sampled)
   N-API Addon x 213,883 ops/sec ±0.77% (87 runs sampled)
   WASM x 170,715 ops/sec ±0.92% (84 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,290,847 ops/sec ±0.78% (89 runs sampled)
   N-API Addon x 4,552,142 ops/sec ±1.13% (88 runs sampled)
   WASM x 11,748,940 ops/sec ±1.51% (87 runs sampled)
 Fastest is WASM

Mergesort:
   Native x 3,286 ops/sec ±1.02% (87 runs sampled)
   N-API Addon x 43,647 ops/sec ±1.68% (82 runs sampled)
   WASM x 46,866 ops/sec ±1.15% (89 runs sampled)
 Fastest is WASM
```

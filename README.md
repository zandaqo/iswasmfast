# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 59,886 ops/sec ±1.15% (87 runs sampled)
   N-API Addon x 227,139 ops/sec ±0.93% (91 runs sampled)
   WASM x 164,446 ops/sec ±1.59% (90 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,325,703 ops/sec ±1.69% (88 runs sampled)
   N-API Addon x 4,409,390 ops/sec ±1.12% (92 runs sampled)
   WASM x 7,147,734 ops/sec ±2.38% (82 runs sampled)
 Fastest is WASM

Mergesort:
   Native x 3,321 ops/sec ±1.37% (87 runs sampled)
   N-API Addon x 53,204 ops/sec ±1.61% (84 runs sampled)
   WASM x 12,900 ops/sec ±0.80% (89 runs sampled)
 Fastest is N-API Addon
```

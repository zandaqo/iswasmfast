# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 80,277 ops/sec ±1.24% (79 runs sampled)
   N-API Addon x 291,347 ops/sec ±0.84% (92 runs sampled)
   WASM x 193,640 ops/sec ±0.98% (87 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,241,121 ops/sec ±1.04% (86 runs sampled)
   N-API Addon x 4,309,871 ops/sec ±0.74% (90 runs sampled)
   WASM x 7,324,322 ops/sec ±1.05% (90 runs sampled)
 Fastest is WASM

Mergesort:
   Native x 3,268 ops/sec ±1.06% (89 runs sampled)
   N-API Addon x 57,328 ops/sec ±1.53% (86 runs sampled)
   WASM x 12,464 ops/sec ±1.51% (91 runs sampled)
 Fastest is N-API Addon

Dot Product:
   Native x 83,442 ops/sec ±0.72% (88 runs sampled)
   N-API Addon x 145,558 ops/sec ±1.71% (85 runs sampled)
   WASM x 12,694 ops/sec ±0.95% (92 runs sampled)
 Fastest is N-API Addon
```

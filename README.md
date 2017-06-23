# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 65,642 ops/sec ±3.14% (79 runs sampled)
   N-API Addon x 239,654 ops/sec ±1.00% (86 runs sampled)
   WASM x 189,264 ops/sec ±1.12% (88 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 2,226,630 ops/sec ±0.81% (89 runs sampled)
   N-API Addon x 4,321,528 ops/sec ±0.95% (89 runs sampled)
   WASM x 10,394,319 ops/sec ±1.17% (90 runs sampled)
 Fastest is WASM
```

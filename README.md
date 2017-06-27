# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 60,738 ops/sec ±1.58% (83 runs sampled)
   N-API Addon x 234,153 ops/sec ±0.60% (90 runs sampled)
   WASM x 171,096 ops/sec ±0.77% (88 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,242,362 ops/sec ±0.89% (89 runs sampled)
   N-API Addon x 3,896,472 ops/sec ±0.95% (89 runs sampled)
   WASM x 7,394,239 ops/sec ±1.21% (89 runs sampled)
 Fastest is WASM

Mergesort:
   Native x 3,234 ops/sec ±1.01% (86 runs sampled)
   N-API Addon x 53,109 ops/sec ±1.48% (86 runs sampled)
   WASM x 12,899 ops/sec ±0.52% (91 runs sampled)
 Fastest is N-API Addon

Dot Product:
   Native x 83,345 ops/sec ±1.08% (87 runs sampled)
   N-API Addon x 101,298 ops/sec ±1.03% (89 runs sampled)
   WASM x 12,930 ops/sec ±1.88% (90 runs sampled)
 Fastest is N-API Addon
```

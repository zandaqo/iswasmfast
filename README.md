# iswasmfast

[![npm](https://img.shields.io/npm/v/iswasmfast.svg?style=flat-square)](https://www.npmjs.com/package/iswasmfast)

Performance comparison of WebAssembly, C++ Addon, and native implementations of various algorithms in Node.js.

## Benchmark
```
> node --napi-modules benchmark.js

Levenstein Distance:
   Native x 70,396 ops/sec ±1.41% (82 runs sampled)
   N-API Addon x 261,845 ops/sec ±0.82% (91 runs sampled)
   Web Assembly x 182,224 ops/sec ±1.01% (87 runs sampled)
 Fastest is N-API Addon

Fibonacci:
   Native x 3,371,295 ops/sec ±0.91% (91 runs sampled)
   N-API Addon x 4,422,750 ops/sec ±1.40% (86 runs sampled)
   Web Assembly x 7,470,752 ops/sec ±1.39% (89 runs sampled)
 Fastest is Web Assembly

Mergesort:
   Native x 3,603 ops/sec ±0.84% (87 runs sampled)
   N-API Addon x 20,977 ops/sec ±1.00% (90 runs sampled)
   Web Assembly x 13,058 ops/sec ±0.40% (93 runs sampled)
 Fastest is N-API Addon

Dot Product:
   Native x 101,445 ops/sec ±1.09% (90 runs sampled)
   N-API Addon x 33,937 ops/sec ±0.84% (88 runs sampled)
   Web Assembly x 13,254 ops/sec ±1.38% (92 runs sampled)
 Fastest is Native

Fermat Primality Test:
   Native x 809,201 ops/sec ±0.77% (89 runs sampled)
   N-API Addon x 1,997,874 ops/sec ±0.87% (87 runs sampled)
   Web Assembly x 2,639,147 ops/sec ±1.03% (90 runs sampled)
 Fastest is Web Assembly
```

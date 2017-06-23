/* eslint no-unused-vars: 0 */

const Benchmark = require('benchmark');
const native = require('./src/native.js');
const addon = require('./build/Release/addon.node');
const wasm = require('./wasm.js');

const wasmLevenstein = wasm.cwrap('_levenstein', 'number', ['string', 'string']);
const wasmFibonacci = wasm.cwrap('_fibonacci', 'number', ['number']);

// Emscripten doesn't support passing array, so we manipulate it's memory directly
const wasmArrayWrapper = (mod, cb) => {
  return (arr) => {
    const nBytes = arr.length * arr.BYTES_PER_ELEMENT;
    const Ctor = arr.constructor;
    const dataPtr = mod._malloc(nBytes);
    const dataHeap = new Ctor(mod.HEAPF64.buffer, dataPtr, nBytes);
    dataHeap.set(new Ctor(arr.buffer));
    mod.ccall(cb, null, ['number', 'number'], [dataHeap.byteOffset, arr.length]);
    const result = new Ctor(dataHeap.buffer, dataHeap.byteOffset, arr.length);
    mod._free(dataHeap.byteOffset);
    return result;
  };
};

const wasmMergesort = wasmArrayWrapper(wasm, '_mergesort');

const randomInRange = (max, min = 0) => Math.floor(Math.random() * (((max - min) + 1) + min));

const generateString = (length) => {
  const text = [];
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text.push(possible.charAt(randomInRange(possible.length)));
  }
  return text.join('');
};

const generateArray = (length) => {
  const result = new Float64Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = Math.random();
  }
  return result;
};

const stringsArray = (() => {
  const result = [];
  let i = 0;
  while (i < 100) {
    result.push(generateString(randomInRange(40)));
    i++;
  }
  return result;
})();

const levensteinSuite = new Benchmark.Suite('Levenstein Distance:');
levensteinSuite.add('Native', () => {
  const result = native.levenstein(stringsArray[randomInRange(99)],
    stringsArray[randomInRange(99)]);
})
  .add('N-API Addon', () => {
    const result = addon.levenstein(stringsArray[randomInRange(99)],
      stringsArray[randomInRange(99)]);
  })
  .add('WASM', () => {
    const result = wasmLevenstein(stringsArray[randomInRange(99)],
      stringsArray[randomInRange(99)]);
  })
  .on('start', (event) => {
    console.log(event.currentTarget.name);
  })
  .on('cycle', (event) => {
    console.log(`   ${String(event.target)}`);
  })
  .on('complete', (event) => {
    console.log(` Fastest is ${event.currentTarget.filter('fastest').map('name')}`);
    console.log('');
  });

const fibonacciSuite = new Benchmark.Suite('Fibonacci:');
fibonacciSuite.add('Native', () => {
  const result = native.fibonacci(randomInRange(45, 30));
})
  .add('N-API Addon', () => {
    const result = addon.fibonacci(randomInRange(45, 30));
  })
  .add('WASM', () => {
    const result = wasmFibonacci(randomInRange(45, 30));
  })
  .on('start', (event) => {
    console.log(event.currentTarget.name);
  })
  .on('cycle', (event) => {
    console.log(`   ${String(event.target)}`);
  })
  .on('complete', (event) => {
    console.log(` Fastest is ${event.currentTarget.filter('fastest').map('name')}`);
    console.log('');
  });

const mergesortSuite = new Benchmark.Suite('Mergesort:');
mergesortSuite.add('Native', () => {
  const result = native.mergesort(generateArray(100));
})
  .add('N-API Addon', () => {
    const result = addon.mergesort(generateArray(100));
  })
  .add('WASM', () => {
    const result = wasmMergesort(generateArray(100));
  })
  .on('start', (event) => {
    console.log(event.currentTarget.name);
  })
  .on('cycle', (event) => {
    console.log(`   ${String(event.target)}`);
  })
  .on('complete', (event) => {
    console.log(` Fastest is ${event.currentTarget.filter('fastest').map('name')}`);
    console.log('');
  });

wasm.onRuntimeInitialized = () => {
  levensteinSuite.run();
  fibonacciSuite.run();
  mergesortSuite.run();
};

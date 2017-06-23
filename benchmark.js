/* eslint no-unused-vars: 0 */

const Benchmark = require('benchmark');
const native = require('./native.js');
const addon = require('./build/Release/addon.node');
const wasm = require('./wasm.js');

const wasmLevenstein = wasm.cwrap('_levenstein', 'number', ['string', 'string']);
const wasmFibonacci = wasm.cwrap('_fibonacci', 'number', ['number']);

const randomInRange = (max, min = 0) => Math.floor(Math.random() * (((max - min) + 1) + min));

const generateString = (length) => {
  const text = [];
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text.push(possible.charAt(randomInRange(possible.length)));
  }
  return text.join('');
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

wasm.onRuntimeInitialized = () => {
  levensteinSuite.run();
  fibonacciSuite.run();
};

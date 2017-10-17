/* eslint no-unused-vars: 0 */

const Benchmark = require('benchmark');
const native = require('./src/native.js');
const addon = require('./build/Release/addon.node');
const wasm = require('./src/wasm.js');

const randomInRange = (max, min = 0) => Math.floor(Math.random() * (((max - min) + 1) + min));

const generateString = (length) => {
  const text = [];
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text.push(possible.charAt(randomInRange(possible.length)));
  }
  return text.join('');
};

const generateRegressionData = (amount, length, isTyped) => {
  const result = new Array(amount);
  for (let i = 0; i < amount; i++) {
    const y = isTyped ? new Float64Array(length) : new Array(length);
    const x = isTyped ? new Float64Array(length) : new Array(length);
    const slope = parseFloat((Math.random() * 10).toPrecision(2));
    const intercept = parseFloat((Math.random() * 10).toPrecision(2));
    for (let i = 0; i < length; i++) {
      x[i] = Math.floor((Math.random() * 100));
      y[i] = intercept + (slope * x[i]) + Math.random();
    }
    result[i] = [y, x];
  }
  return result;
}

const generateStringsArray = (amount, length) => {
  const result = new Array(amount);
  for (let i = 0; i < amount; i++) {
    result[i] = generateString(randomInRange(length));
  }
  return result;
}

const levensteinData = generateStringsArray(100, 40);
const SHAData = generateStringsArray(1000, 1000);
const regressionData = generateRegressionData(10, 1000);
const regressionDataTyped = generateRegressionData(10, 1000, true);

const levensteinSuite = new Benchmark.Suite('Levenstein Distance:');
levensteinSuite.add('Native', () => {
  const result = native.levenstein(levensteinData[randomInRange(99)],
    levensteinData[randomInRange(99)]);
})
  .add('N-API Addon', () => {
    const result = addon.levenstein(levensteinData[randomInRange(99)],
      levensteinData[randomInRange(99)]);
  })
  .add('Web Assembly', () => {
    const result = wasm.levenstein(levensteinData[randomInRange(99)],
      levensteinData[randomInRange(99)]);
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
  .add('Web Assembly', () => {
    const result = wasm.fibonacci(randomInRange(45, 30));
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

const fermatSuite = new Benchmark.Suite('Fermat Primality Test:');
fermatSuite.add('Native', () => {
  const result = native.fermat(randomInRange(1000000), 3);
})
  .add('N-API Addon', () => {
    const result = addon.fermat(randomInRange(1000000), 3);
  })
  .add('Web Assembly', () => {
    const result = wasm.fermat(randomInRange(1000000), 3);
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

const regressionSuite = new Benchmark.Suite('Simple Linear Regression:');
regressionSuite.add('Native', () => {
  const result = native.regression(...regressionData[randomInRange(9)]);
})
  .add('N-API Addon', () => {
    const result = addon.regression(...regressionData[randomInRange(9)]);
  })
  .add('N-API Addon using TypedArrays', () => {
    const result = addon.regression(...regressionDataTyped[randomInRange(9)]);
  })
  .add('Web Assembly', () => {
    const result = wasm.regression(...regressionData[randomInRange(9)]);
  })
  .add('Web Assembly using TypedArrays', () => {
    const result = wasm.regression(...regressionDataTyped[randomInRange(9)]);
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

const sha256Suite = new Benchmark.Suite('SHA256:');
sha256Suite.add('Native', () => {
  const result = native.sha256(SHAData[randomInRange(999)]);
})
  .add('N-API Addon', () => {
    const result = addon.sha256(SHAData[randomInRange(999)]);
  })
  .add('Web Assembly', () => {
    const result = wasm.sha256(SHAData[randomInRange(999)]);
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
  fermatSuite.run();
  regressionSuite.run();
  sha256Suite.run();
};

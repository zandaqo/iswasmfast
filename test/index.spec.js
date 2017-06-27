const native = require('../src/native.js');
const addon = require('../build/Release/addon.node');

const fibonacci = require('./fibonacci.js');
const levenstein = require('./levenstein.js');
const mergesort = require('./mergesort.js');
const dotproduct = require('./dotproduct.js');

describe('Native', () => {
  fibonacci(native.fibonacci);
  levenstein(native.levenstein);
  mergesort(native.mergesort);
  dotproduct(native.dotproduct);
});

describe('N-API Addon', () => {
  fibonacci(addon.fibonacci);
  levenstein(addon.levenstein);
  mergesort(addon.mergesort);
  dotproduct(addon.dotproduct);
});

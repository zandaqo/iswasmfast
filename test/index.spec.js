const native = require('../src/native.js');
const addon = require('../build/Release/addon.node');

const fibonacci = require('./fibonacci.js');
const levenstein = require('./levenstein.js');
const fermat = require('./fermat.js');
const regression = require('./regression.js');

describe('Native', () => {
  fibonacci(native.fibonacci);
  levenstein(native.levenstein);
  fermat(native.fermat);
  regression(native.regression);
});

describe('N-API Addon', () => {
  fibonacci(addon.fibonacci);
  levenstein(addon.levenstein);
  fermat(addon.fermat);
  regression(addon.regression);
});

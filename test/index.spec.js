const native = require('../src/native.js');
const addon = require('../build/Release/addon.node');

const fibonacci = require('./fibonacci.js');
const levenstein = require('./levenstein.js');
const fermat = require('./fermat.js');
const regression = require('./regression.js');
const sha256 = require('./sha256.js');

describe('Native', () => {
  fibonacci(native.fibonacci);
  levenstein(native.levenstein);
  fermat(native.fermat);
  regression(native.regression);
  sha256(native.sha256);
});

describe('N-API Addon', () => {
  fibonacci(addon.fibonacci);
  levenstein(addon.levenstein);
  fermat(addon.fermat);
  regression(addon.regression);
  sha256(addon.sha256);
});

const native = require("../src/native.js");
const addon = require("../build/Release/addon.node");
const wasm = require("../src/wasm.js");

const fibonacci = require("./fibonacci.js");
const levenstein = require("./levenstein.js");
const fermat = require("./fermat.js");
const regression = require("./regression.js");
const sha256 = require("./sha256.js");

describe("Native", () => {
  fibonacci(native);
  levenstein(native);
  fermat(native);
  regression(native);
  sha256(native);
});

describe("N-API Addon", () => {
  fibonacci(addon);
  levenstein(addon);
  fermat(addon);
  regression(addon);
  sha256(addon);
});

describe("Web Assembly", () => {
  beforeAll((done) => {
    if (wasm.fermat) return done();
    setTimeout(() => {
      done();
    }, 2000);
  });
  fibonacci(wasm);
  levenstein(wasm);
  fermat(wasm);
  regression(wasm);
  sha256(wasm);
});

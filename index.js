const napi = require("./build/Release/addon.node");
const native = require("./src/native.js");
const wasm = require("./src/wasm.js");

const api = { napi, native, wasm };
module.exports = api;

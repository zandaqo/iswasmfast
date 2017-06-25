const wasmModule = require('../out/wasm.js');

const wasmArrayWrapper = (mod, cb) => (arr) => {
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

module.exports = {
  Module: wasmModule,
  fibonacci: wasmModule.cwrap('_fibonacci', 'number', ['number']),
  levenstein: wasmModule.cwrap('_levenstein', 'number', ['string', 'string']),
  mergesort: wasmArrayWrapper(wasmModule, '_mergesort'),
};

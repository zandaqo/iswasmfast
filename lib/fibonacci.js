function fibonacci(n, a = 0, b = 1) {
  return n < 1 ? a : fibonacci(n - 1, a + b, a);
}

module.exports = fibonacci;

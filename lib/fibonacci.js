function fibonacci(n, a = 0, b = 1) {
  if (n < 1) return a;
  return fibonacci(n - 1, a + b, a);
}

module.exports = fibonacci;

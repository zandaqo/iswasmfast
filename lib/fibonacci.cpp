unsigned int fibonacci(unsigned int n, unsigned int a = 0, unsigned int b = 1) {
  return n < 1 ? a : fibonacci(n - 1, a + b, a);
}

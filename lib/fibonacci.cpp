unsigned int fib(unsigned int n, unsigned int a, unsigned int b) {
  return n < 1 ? a : fib(n - 1, a + b, a);
}

unsigned int fibonacci(unsigned int n) {
  return fib(n, 0, 1);
}

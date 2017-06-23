 unsigned int fibonacci(unsigned int n, unsigned int a = 0, unsigned int b = 1) {
     if(n < 1) return a;
     else return fibonacci(n - 1, a + b, a);
}
/* Source: http://www.geeksforgeeks.org/primality-test-set-2-fermet-method/ */

int power(int a, unsigned int n, int p) {
  int res = 1;
  a = a % p;

  while (n > 0)
  {
    if (n & 1)
      res = (res * a) % p;

    n = n >> 1;
    a = (a * a) % p;
  }
  return res;
}

bool isPrime(unsigned int n, int k) {
  if (n <= 1 || n == 4)  return false;
  if (n <= 3) return true;

  while (k>0)
  {
    int a = 2 + std::rand() % (n-4);

    if (power(a, n - 1, n) != 1)
      return false;

    k--;
  }

  return true;
}

function power(a, n, p) {
  let res = 1;
  a = a % p;

  while (n > 0) {
    if (n & 1) res = (res * a) % p;
    n = n >> 1;
    a = (a * a) % p;
  }
  return res;
}

module.exports = (n, k) => {
  if (n <= 1 || n === 4) return false;
  if (n <= 3) return true;

  while (k > 0) {
    const r = Math.floor((Math.random() * 100000));
    let a = 2 + r % (n - 4);
    if (power(a, n - 1, n) !== 1) return false;
    k--;
  }
  return true;
};

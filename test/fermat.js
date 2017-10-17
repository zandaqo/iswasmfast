module.exports = (instance) => {
  it('checks if a number is a prime using the Fermat primality test', () => {
    expect(instance.fermat(1, 1)).toBe(false);
    expect(instance.fermat(2, 1)).toBe(true);
    expect(instance.fermat(7, 1)).toBe(true);
    expect(instance.fermat(100, 1)).toBe(false);
    expect(instance.fermat(561, 3)).toBe(false);
    expect(instance.fermat(1e6, 3)).toBe(false);
  });
};

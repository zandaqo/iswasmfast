module.exports = (fermat) => {
  describe('Fermat', () => {
    it('checks if a number is a prime using the Fermat primality test', () => {
      expect(fermat(1, 1)).toBe(false);
      expect(fermat(2, 1)).toBe(true);
      expect(fermat(7, 1)).toBe(true);
      expect(fermat(100, 1)).toBe(false);
      expect(fermat(561, 3)).toBe(false);
      expect(fermat(1e6, 3)).toBe(false);
    });
  });
};

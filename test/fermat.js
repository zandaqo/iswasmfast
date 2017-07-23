module.exports = (fermat) => {
  describe('Fermat', () => {
    it('checks if a number is a prime using the Fermat primality test', () => {
      expect(fermat(1, 1)).toEqual(false);
      expect(fermat(2, 1)).toEqual(true);
      expect(fermat(7, 1)).toEqual(true);
      expect(fermat(100, 1)).toEqual(false);
      expect(fermat(561, 3)).toEqual(false);
    });
  });
};

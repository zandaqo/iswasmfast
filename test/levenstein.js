module.exports = (levenstein) => {
  describe('Fibonacci', () => {
    it('returns a Levenstein distance of two strings', () => {
      expect(levenstein('a', 'a')).toEqual(0);
      expect(levenstein('a', 'b')).toEqual(1);
      expect(levenstein('ab', 'a')).toEqual(1);
      expect(levenstein('abcd', 'ac')).toEqual(2);
    });
  });
};

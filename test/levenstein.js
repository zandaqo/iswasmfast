module.exports = (levenstein) => {
  describe('Levenstein', () => {
    it('returns a Levenstein distance of two strings', () => {
      expect(levenstein('a', 'a')).toBe(0);
      expect(levenstein('a', 'b')).toBe(1);
      expect(levenstein('ab', 'a')).toBe(1);
      expect(levenstein('abcd', 'ac')).toBe(2);
    });
  });
};

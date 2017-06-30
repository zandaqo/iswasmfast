module.exports = (dotproduct) => {
  describe('Dot Product', () => {
    it('returns the dot product of two vectors', () => {
      expect(dotproduct([1, 2, 3], [1, 2, 3])).toEqual(14);
      expect(dotproduct([1], [2])).toEqual(2);
      expect(dotproduct([], [])).toEqual(0);
      expect(dotproduct([3, 4], [2, 3])).toEqual(18);
    });
  });
};

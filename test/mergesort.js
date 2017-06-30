module.exports = (mergesort) => {
  describe('Mergesort', () => {
    it('sorts a typed array using Mergesort algorithms', () => {
      expect(mergesort([3, 2, 1])).toEqual([1, 2, 3]);
      expect(mergesort([0, 2, 1])).toEqual([0, 1, 2]);
      expect(mergesort([])).toEqual([]);
    });
  });
};

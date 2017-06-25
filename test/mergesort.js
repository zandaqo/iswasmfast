module.exports = (mergesort) => {
  describe('Fibonacci', () => {
    it('sorts a typed array using Mergesort algorithms', () => {
      expect(Array.from(mergesort(new Float64Array([3, 2, 1])))).toEqual([1, 2, 3]);
      expect(Array.from(mergesort(new Float64Array([0, 2, 1])))).toEqual([0, 1, 2]);
      expect(Array.from(mergesort(new Float64Array([])))).toEqual([]);
    });
  });
};

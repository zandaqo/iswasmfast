module.exports = (dotproduct) => {
  describe('Dot Product', () => {
    it('returns the dot product of two vectors', () => {
      expect(dotproduct(new Float64Array([1, 2, 3]), new Float64Array([1, 2, 3]))).toEqual(14);
      expect(dotproduct(new Float64Array([1]), new Float64Array([2]))).toEqual(2);
      expect(dotproduct(new Float64Array([]), new Float64Array([]))).toEqual(0);
      expect(dotproduct(new Float64Array([3, 4]), new Float64Array([2, 3]))).toEqual(18);
    });
  });
};

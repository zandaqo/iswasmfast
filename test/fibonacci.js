module.exports = (fibonacci) => {
  describe('Fibonacci', () => {
    it('returns a Fibonacci number of given index', () => {
      expect(fibonacci(1)).toEqual(1);
      expect(fibonacci(2)).toEqual(1);
      expect(fibonacci(3)).toEqual(2);
      expect(fibonacci(4)).toEqual(3);
      expect(fibonacci(20)).toEqual(6765);
      expect(fibonacci(30)).toEqual(832040);
      expect(fibonacci(45)).toEqual(1134903170);
    });
  });
};

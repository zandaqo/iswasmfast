module.exports = (fibonacci) => {
  describe('Fibonacci', () => {
    it('returns a Fibonacci number of given index', () => {
      expect(fibonacci(1)).toBe(1);
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(3)).toBe(2);
      expect(fibonacci(4)).toBe(3);
      expect(fibonacci(20)).toBe(6765);
      expect(fibonacci(30)).toBe(832040);
      expect(fibonacci(45)).toBe(1134903170);
    });
  });
};

module.exports = (instance) => {
  it("returns a Fibonacci number of given index", () => {
    expect(instance.fibonacci(1)).toBe(1);
    expect(instance.fibonacci(2)).toBe(1);
    expect(instance.fibonacci(3)).toBe(2);
    expect(instance.fibonacci(4)).toBe(3);
    expect(instance.fibonacci(20)).toBe(6765);
    expect(instance.fibonacci(30)).toBe(832040);
    expect(instance.fibonacci(45)).toBe(1134903170);
  });
};

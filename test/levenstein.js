module.exports = (instance) => {
  it('returns a Levenstein distance of two strings', () => {
    expect(instance.levenstein('a', 'a')).toBe(0);
    expect(instance.levenstein('a', 'b')).toBe(1);
    expect(instance.levenstein('ab', 'a')).toBe(1);
    expect(instance.levenstein('abcd', 'ac')).toBe(2);
  });
};

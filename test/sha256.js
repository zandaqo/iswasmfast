module.exports = (sha256) => {
  describe('SHA256', () => {
    it('computes SHA256 hash of a given string', () => {
      expect(sha256('Hello World!')).toBe('7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069');
      expect(sha256('a')).toBe('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb');
      expect(sha256('123')).toBe('a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3');
      expect(sha256('a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3')).toBe('173af653133d964edfc16cafe0aba33c8f500a07f3ba3f81943916910c257705');
    });
  });
};

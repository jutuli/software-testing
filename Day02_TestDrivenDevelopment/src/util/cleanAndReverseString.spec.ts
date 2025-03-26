import { cleanAndReverseString } from './cleanAndReverseString';

describe('cleanAndReverseString', () => {
  it('should throw an error when given a non-string input', () => {
    expect(() => cleanAndReverseString(123 as any as string)).toThrow(
      'Input must be a string'
    );
  });
  it('should return an empty string when given an empty string', () => {
    expect(cleanAndReverseString('')).toBe('');
  });
  it('should return the reversed input string when given a string without special characters', () => {
    expect(cleanAndReverseString('hello')).toBe('olleh');
  });
  it('should return the reversed input string when given a string that consists of letters or numbers', () => {
    expect(cleanAndReverseString('123hello')).toBe('olleh321');
  });
  it('should return the reversed input string without special characters when given a string with special characters', () => {
    expect(cleanAndReverseString('h?ell&o')).toBe('olleh');
  });
  it('should return an empty string when given a string that only consists of special characters', () => {
    expect(cleanAndReverseString('!*+#@?')).toBe('');
  });
});

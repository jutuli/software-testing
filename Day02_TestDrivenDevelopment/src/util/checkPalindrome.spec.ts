import { checkPalindrome } from './checkPalindrome';

describe('checkPalindrome', () => {
  it('should return undefined if the input is not a string', () => {
    expect(checkPalindrome(123 as any as string)).toBeUndefined();
  });
  it('should return true if the input is a palindrome', () => {
    expect(checkPalindrome('radar')).toBeTruthy();
  });
  it("should return false if the input isn't a palindrome", () => {
    expect(checkPalindrome('hello')).toBeFalsy();
  });
  it('should return true if the input is an empty string', () => {
    expect(checkPalindrome('')).toBeTruthy();
  });
  it('should return true if the input is a single character', () => {
    expect(checkPalindrome('a')).toBeTruthy();
  });
  it('should return true if the input is a palindrome with different cases', () => {
    expect(checkPalindrome('Radar')).toBeTruthy();
  });
  it('should return true if the input is a palindrome with spaces', () => {
    expect(checkPalindrome('put it up')).toBeTruthy();
  });

  it('should return false if the input includes punctuation marks not in the same place', () => {
    expect(checkPalindrome('put it up!')).toBeFalsy();
  });
});

import { areAnagrams } from './areAnagrams';

describe('areAnagrams', () => {
  it('should return true if two strings are anagrams', () => {
    expect(areAnagrams('listen', 'silent')).toBe(true);
  });

  it('should return false if two strings are not anagrams', () => {
    expect(areAnagrams('hello', 'world')).toBe(false);
  });
  it('should return undefined if one of the strings is empty', () => {
    expect(areAnagrams('', 'world')).toBe(false);
  });
  it('should return undefined if both strings are empty', () => {
    expect(areAnagrams('', '')).toBe(true);
  });
  it('should return undefined if one of the strings is undefined', () => {
    expect(areAnagrams(undefined!, 'world')).toBe(undefined);
  });
  it('should return undefined if both strings are undefined', () => {
    expect(areAnagrams(undefined!, undefined!)).toBe(undefined);
  });
  it('should return undefined if one of the strings is null', () => {
    expect(areAnagrams(null!, 'world')).toBe(undefined);
  });
  it('should return undefined if both strings are null', () => {
    expect(areAnagrams(null!, null!)).toBe(undefined);
  });
  it('should return undefined if one of the strings is a number', () => {
    expect(areAnagrams(123 as any as string, 'world')).toBe(undefined);
  });
  it('should return undefined if both strings are numbers', () => {
    expect(areAnagrams(123 as any as string, 456 as any as string)).toBe(
      undefined
    );
  });
  it('should return undefined if one of the strings is a boolean', () => {
    expect(areAnagrams(true as any as string, 'world')).toBe(undefined);
  });
});

import { getCharacterFrequency } from './getCharacterFrequency';

describe('getCharacterFrequency', () => {
  it('should throw an error when given a non-string input', () => {
    expect(() => getCharacterFrequency(123 as any as string)).toThrow(
      'Input must be a string'
    );
  });
  it('should return an empty object when given an empty string', () => {
    expect(getCharacterFrequency('')).toEqual({});
  });
  it('should return the correct character frequency inside of an object when given a string with multiple characters', () => {
    expect(getCharacterFrequency('hello')).toEqual({
      h: 1,
      e: 1,
      l: 2,
      o: 1,
    });
  });
  it('should return the correct character frequency inside of an object when given a string with multiple characters and different cases', () => {
    expect(getCharacterFrequency('Hello')).toEqual({
      h: 1,
      e: 1,
      l: 2,
      o: 1,
    });
  });
  it('should return the correct character frequency inside of an object when given a string with multiple characters and special characters', () => {
    expect(getCharacterFrequency('Hello!')).toEqual({
      h: 1,
      e: 1,
      l: 2,
      o: 1,
      '!': 1,
    });
  });
});

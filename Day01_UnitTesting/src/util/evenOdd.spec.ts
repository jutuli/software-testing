import { evenOdd } from './evenOdd';

describe('evenOdd', () => {
  it("should return an array of 'Odd' and 'Even' strings", () => {
    expect(evenOdd(3)).toEqual(['Odd', 'Even', 'Odd']);
    expect(evenOdd(5)).toEqual(['Odd', 'Even', 'Odd', 'Even', 'Odd']);
  });
  it('should return "Odd" if n is a decimal number', () => {
    expect(evenOdd(1.5)).toEqual(['Odd']);
  });
  it('should return an empty array if n is 0', () => {
    expect(evenOdd(0)).toEqual([]);
  });
  it('should return an empty array if n is negative', () => {
    expect(evenOdd(-1)).toEqual([]);
  });
  it('should return an empty array if n is a string', () => {
    expect(evenOdd('a' as any as number)).toEqual([]);
  });
  it('should return an empty array if n is NaN', () => {
    expect(evenOdd(NaN)).toEqual([]);
  });
  it('should return an empty array if n is Infinity', () => {
    expect(evenOdd(Infinity)).toEqual([]);
  });
});

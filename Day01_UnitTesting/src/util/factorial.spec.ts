import { factorial } from './factorial';

describe('factorial', () => {
  it('should return 1 when input is 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('should return 1 when input is 1', () => {
    expect(factorial(1)).toBe(1);
  });
  it('should return 2 when input is 2', () => {
    expect(factorial(2)).toBe(2);
  });
  it('should return 6 when input is 3', () => {
    expect(factorial(3)).toBe(6);
  });
  it('should return 24 when input is 4', () => {
    expect(factorial(4)).toBe(24);
  });
});

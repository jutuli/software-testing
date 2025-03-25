import { translateToMorse } from './translateToMorse';

describe('translateToMorse', () => {
  it('should return the correct Morse code for a string input', () => {
    expect(translateToMorse('Hello World')).toBe(
      '.... . .-.. .-.. ---      .-- --- .-. .-.. -.. '
    );
  });
  it('should return an empty string if the input is an empty string', () => {
    expect(translateToMorse('')).toBe('');
  });
  it('should return undefined if the input is a number', () => {
    expect(translateToMorse(123 as any as string)).toBe(undefined);
  });
  it('should return the Morse code with a blank for the non-morse character if the input includes a non-morse character', () => {
    expect(translateToMorse('Äpfel')).toBe(' .--. ..-. . .-.. ');
  });
});

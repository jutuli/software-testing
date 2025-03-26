export const checkPalindrome = (input: string): boolean | undefined => {
  if (typeof input !== 'string') {
    return undefined;
  }
  const backwardString = input.split('').reverse().join('');
  return backwardString.toLowerCase() === input.toLowerCase() ? true : false;
};

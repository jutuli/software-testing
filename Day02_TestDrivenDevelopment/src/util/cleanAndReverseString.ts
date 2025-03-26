export const cleanAndReverseString = (input: string): string => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  return input
    .replace(/[^a-zA-Z0-9]/g, '')
    .split('')
    .reverse()
    .join('');
};

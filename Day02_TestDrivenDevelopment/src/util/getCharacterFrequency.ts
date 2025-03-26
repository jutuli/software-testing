export const getCharacterFrequency = (input: string) => {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }
  const frequency: { [key: string]: number } = {};
  for (const char of input.toLowerCase()) {
    frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
  }
  return frequency;
};

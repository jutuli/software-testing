export function areAnagrams(string1: string, string2: string) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return undefined;
  }
  const normalize = (str: string) =>
    str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  return normalize(string1) === normalize(string2);
}

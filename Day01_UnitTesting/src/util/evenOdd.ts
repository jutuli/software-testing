export function evenOdd(n: number) {
  if (typeof n !== 'number' || isNaN(n) || n === Infinity || n < 0) {
    return [];
  }
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result.push('Even');
    } else {
      result.push('Odd');
    }
  }
  return result;
}

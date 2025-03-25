import { mergeIntervals } from './mergeIntervals';

describe('mergeIntervals', () => {
  it('should return an empty array if there are 0 intervals', () => {
    expect(mergeIntervals([])).toEqual([]);
  });
  it("should return the same interval if there's only 1 interval", () => {
    expect(mergeIntervals([[1, 3]])).toEqual([[1, 3]]);
  });
  it('should return the same intervals if they do not overlap', () => {
    expect(
      mergeIntervals([
        [1, 3],
        [4, 7],
        [8, 14],
        [15, 20],
      ])
    ).toEqual([
      [1, 3],
      [4, 7],
      [8, 14],
      [15, 20],
    ]);
  });
  it('should merge overlapping intervals and add intervals that do not overlap', () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 7],
        [8, 14],
        [15, 20],
      ])
    ).toEqual([
      [1, 7],
      [8, 14],
      [15, 20],
    ]);
  });
});

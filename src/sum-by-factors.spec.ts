import { sumOfDivided } from './sum-by-factors';

describe('Sum by Factors', () => {
  it('should return the correct sum of factors', () => {
    expect(sumOfDivided([12, 15])).toEqual([
      [2, 12],
      [3, 27],
      [5, 15],
    ]);
    expect(sumOfDivided([15, 21, 24, 30, 45])).toEqual([
      [2, 54],
      [3, 135],
      [5, 90],
      [7, 21],
    ]);
  });
});

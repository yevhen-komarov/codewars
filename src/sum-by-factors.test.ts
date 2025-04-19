import { expect } from 'chai';
import { sumOfDivided } from './sum-by-factors.js';

describe('Sum by Factors', () => {
  it('should return the correct sum of factors', () => {
    expect(sumOfDivided([12, 15])).to.deep.equal([
      [2, 12],
      [3, 27],
      [5, 15],
    ]);
    expect(sumOfDivided([15, 21, 24, 30, 45])).to.deep.equal([
      [2, 54],
      [3, 135],
      [5, 90],
      [7, 21],
    ]);
  });
});

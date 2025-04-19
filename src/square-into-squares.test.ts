import { expect } from 'chai';
import { describe, it } from 'mocha';
import { decompose } from './square-into-squares.js';

describe('decompose', () => {
  it('should return the correct decomposition for valid inputs', () => {
    expect(decompose(5)).to.deep.equal([3, 4]);
    expect(decompose(12)).to.deep.equal([1, 2, 3, 7, 9]);
    expect(decompose(50)).to.deep.equal([1, 3, 5, 8, 49]);
    expect(decompose(44)).to.deep.equal([2, 3, 5, 7, 43]);
  });

  it('should return an empty array for inputs that cannot be decomposed', () => {
    expect(decompose(2)).to.deep.equal([]);
    expect(decompose(3)).to.deep.equal([]);
  });

  it('should handle edge cases', () => {
    expect(decompose(1)).to.deep.equal([]);
    expect(decompose(0)).to.deep.equal([]);
  });
});

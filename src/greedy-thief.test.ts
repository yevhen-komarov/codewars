import { expect } from 'chai';
import { greedyThief } from './greedy-thief.js';

describe('greedyThief', () => {
  it('should return the correct items for a basic example', () => {
    const items = [
      { weight: 2, price: 6 },
      { weight: 2, price: 3 },
      { weight: 6, price: 5 },
      { weight: 5, price: 4 },
      { weight: 4, price: 6 },
    ];
    const n = 10;
    const expected = [
      { weight: 2, price: 6 },
      { weight: 2, price: 3 },
      { weight: 4, price: 6 },
    ];
    expect(greedyThief(items, n)).to.deep.equal(expected);
  });

  it('should return the item with the highest price when only one item fits', () => {
    const items = [
      { weight: 9, price: 1 },
      { weight: 9, price: 2 },
      { weight: 9, price: 3 },
      { weight: 9, price: 4 },
      { weight: 9, price: 5 },
    ];
    const n = 10;
    const expected = [{ weight: 9, price: 5 }];
    expect(greedyThief(items, n)).to.deep.equal(expected);
  });

  it.skip('should return one valid result when multiple solutions exist', () => {
    const items = [
      { weight: 1, price: 1 },
      { weight: 2, price: 2 },
      { weight: 3, price: 3 },
      { weight: 4, price: 4 },
      { weight: 5, price: 5 },
    ];
    const n = 10;
    const expected = [
      { weight: 2, price: 2 },
      { weight: 3, price: 3 },
      { weight: 5, price: 5 },
    ];
    expect(greedyThief(items, n)).to.deep.equal(expected);
  });

  it.skip('should handle items with zero weight correctly', () => {
    const items = [
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 2, price: 2 },
      { weight: 0, price: 2 },
      { weight: 10, price: 10 },
      { weight: 5, price: 5 },
    ];
    const n = 10;
    const expected = [
      { weight: 0, price: 2 },
      { weight: 10, price: 10 },
    ];
    expect(greedyThief(items, n)).to.deep.equal(expected);
  });

  it('should return an empty array when no items fit', () => {
    const items = [
      { weight: 9, price: 1 },
      { weight: 9, price: 2 },
      { weight: 9, price: 3 },
      { weight: 9, price: 4 },
      { weight: 9, price: 5 },
    ];
    const n = 8;
    const expected = [];
    expect(greedyThief(items, n)).to.deep.equal(expected);
  });

  it('should handle a complex example with multiple items', () => {
    const items = [
      { weight: 0, price: 81 },
      { weight: 11, price: 44 },
      { weight: 5, price: 62 },
      { weight: 18, price: 93 },
      { weight: 2, price: 78 },
      { weight: 10, price: 68 },
      { weight: 8, price: 91 },
      { weight: 13, price: 65 },
      { weight: 6, price: 43 },
      { weight: 2, price: 33 },
      { weight: 15, price: 54 },
      { weight: 9, price: 62 },
      { weight: 5, price: 75 },
      { weight: 13, price: 38 },
      { weight: 15, price: 52 },
      { weight: 13, price: 43 },
      { weight: 18, price: 61 },
      { weight: 3, price: 50 },
      { weight: 13, price: 54 },
      { weight: 1, price: 25 },
      { weight: 1, price: 62 },
      { weight: 9, price: 38 },
      { weight: 17, price: 76 },
      { weight: 3, price: 71 },
      { weight: 3, price: 44 },
      { weight: 0, price: 10 },
      { weight: 12, price: 57 },
    ];
    const n = 225;
    const expected = [
      { weight: 0, price: 81 },
      { weight: 11, price: 44 },
      { weight: 5, price: 62 },
      { weight: 18, price: 93 },
      { weight: 2, price: 78 },
      { weight: 10, price: 68 },
      { weight: 8, price: 91 },
      { weight: 13, price: 65 },
      { weight: 6, price: 43 },
      { weight: 2, price: 33 },
      { weight: 15, price: 54 },
      { weight: 9, price: 62 },
      { weight: 5, price: 75 },
      { weight: 13, price: 38 },
      { weight: 15, price: 52 },
      { weight: 13, price: 43 },
      { weight: 18, price: 61 },
      { weight: 3, price: 50 },
      { weight: 13, price: 54 },
      { weight: 1, price: 25 },
      { weight: 1, price: 62 },
      { weight: 9, price: 38 },
      { weight: 17, price: 76 },
      { weight: 3, price: 71 },
      { weight: 3, price: 44 },
      { weight: 0, price: 10 },
      { weight: 12, price: 57 },
    ];
    expect(greedyThief(items, n)).to.deep.equal(expected);
  });
});

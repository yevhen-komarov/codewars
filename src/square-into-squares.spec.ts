import { decompose } from './square-into-squares';

describe('decompose', () => {
  it('should return the correct decomposition for valid inputs', () => {
    expect(decompose(5)).toEqual([3, 4]);
    expect(decompose(12)).toEqual([1, 2, 3, 7, 9]);
    expect(decompose(50)).toEqual([1, 3, 5, 8, 49]);
    expect(decompose(44)).toEqual([2, 3, 5, 7, 43]);
  });

  it('should return an empty array for inputs that cannot be decomposed', () => {
    expect(decompose(2)).toEqual([]);
    expect(decompose(3)).toEqual([]);
  });

  it('should handle edge cases', () => {
    expect(decompose(1)).toEqual([]);
    expect(decompose(0)).toEqual([]);
  });
});

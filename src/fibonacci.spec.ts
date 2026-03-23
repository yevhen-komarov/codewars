import { fibonacci } from './fibonacci';

describe('fibonacci', () => {
  it('should return [0] for input 0', () => {
    expect(fibonacci(0)).toEqual([0]);
  });

  it('should return [0, 1] for input 1', () => {
    expect(fibonacci(1)).toEqual([0, 1]);
  });

  it('should return [0, 1, 1] for input 2', () => {
    expect(fibonacci(2)).toEqual([0, 1, 1]);
  });

  it('should return [0, 1, 1, 2, 3] for input 4', () => {
    expect(fibonacci(4)).toEqual([0, 1, 1, 2, 3]);
  });

  it('should return the correct sequence for input 15', () => {
    expect(fibonacci(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]);
  });
});

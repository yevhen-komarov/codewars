import { validParentheses } from './valid-parentheses';

describe('validParentheses', () => {
  it('should return true for valid parentheses', () => {
    expect(validParentheses('(')).toBe(false);
    expect(validParentheses(')')).toBe(false);
    expect(validParentheses('')).toBe(true);
    expect(validParentheses('()')).toBe(true);
    expect(validParentheses('())')).toBe(false);
    expect(validParentheses('()')).toBe(true);
    expect(validParentheses(')(()))')).toBe(false);
    expect(validParentheses('(')).toBe(false);
    expect(validParentheses('(())((()())())')).toBe(true);
  });
});

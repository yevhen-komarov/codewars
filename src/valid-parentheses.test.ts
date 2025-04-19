import { expect } from 'chai';
import { describe } from 'mocha';
import { validParentheses } from './valid-parentheses.js';

describe('validParentheses', () => {
  it('should return true for valid parentheses', () => {
    expect(validParentheses('(')).to.be.false;
    expect(validParentheses(')')).to.be.false;
    expect(validParentheses('')).to.be.true;
    expect(validParentheses('()')).to.be.true;
    expect(validParentheses('())')).to.be.false;
    expect(validParentheses('()')).to.be.true;
    expect(validParentheses(')(()))')).to.be.false;
    expect(validParentheses('(')).to.be.false;
    expect(validParentheses('(())((()())())')).to.be.true;
  });
});

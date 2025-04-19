import { expect } from 'chai';
import { solveExpression } from './find-the-unknown-digit.js';

describe('solveExpression', () => {
  const testCases = [
    { expression: '1+1=?', expected: 2 },
    { expression: '123*45?=5?088', expected: 6 },
    { expression: '-5?*-1=5?', expected: 0 },
    { expression: '19--45=5?', expected: -1 },
    { expression: '??*??=302?', expected: 5 },
    { expression: '?*11=??', expected: 2 },
    { expression: '-?*11=-??', expected: 2 },
    { expression: '??*1=??', expected: 2 },
    { expression: '??+??=??', expected: -1 },
    { expression: '-25-?=-34', expected: 9 },
    { expression: '123?45+?=123?45', expected: 0 },
    { expression: '-?56373--9216=-?47157', expected: 8 },
  ];

  testCases.forEach(({ expression, expected }) => {
    it(`should return ${expected} for expression "${expression}"`, () => {
      const result = solveExpression(expression);
      expect(result).to.equal(expected);
    });
  });
});

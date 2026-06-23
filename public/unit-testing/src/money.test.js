import { formatPrice } from './money.js';

// Assignment Part A — http://localhost:5173/#/unit-testing/checkpoint-assignment
// One test is filled in to show the shape. Add the rest below it.
describe('formatPrice()', () => {
  it('formats cents as two decimals', () => {
    expect(formatPrice(4250)).toBe('42.50');
  });

  // Add tests for:
  // - treats 0 as a valid amount     ->  expect(formatPrice(0)).toBe('0.00')
  // - throws on a negative amount     ->  expect(() => formatPrice(-1)).toThrow('invalid amount')
  // - throws on null / undefined
});

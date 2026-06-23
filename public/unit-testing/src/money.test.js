import { formatPrice } from './money.js';

// Assignment Part A — https://heshassan22.github.io/netcentric-academy/#/unit-testing/checkpoint-assignment
// Write the tests for formatPrice() yourself:
// - formats cents as two decimals   ->  expect(formatPrice(4250)).toBe('42.50')
// - treats 0 as a valid amount       ->  expect(formatPrice(0)).toBe('0.00')
// - throws on a negative amount       ->  expect(() => formatPrice(-1)).toThrow('invalid amount')
// - throws on null / undefined
describe('formatPrice()', () => {
});

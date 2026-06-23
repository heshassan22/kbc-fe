// Pure money formatting — no DOM, no side effects, easy to unit-test.
// formatPrice(cents) -> a string with exactly two decimals.
export const formatPrice = (cents) => {
  if (cents == null || cents < 0) throw new Error('invalid amount');
  return (cents / 100).toFixed(2);
};

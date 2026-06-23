import { debounce } from './debounce.js';

// Assignment Part B — use FAKE timers so the test is instant and deterministic.
describe('debounce()', () => {
  it('calls fn once after the delay, even after many calls', () => {
    jest.useFakeTimers();
    const fn = jest.fn();
    const debounced = debounce(fn, 300);

    debounced();
    debounced();
    debounced();
    jest.advanceTimersByTime(300);

    expect(fn).toHaveBeenCalledTimes(1);
    jest.useRealTimers();
  });

  // Add a test for:
  // - does NOT call fn before the delay elapses (assert before advancing the timers)
});

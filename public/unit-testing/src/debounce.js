// debounce(fn, ms) returns a wrapped function that only runs `fn` once the
// caller has been quiet for `ms`. In tests, drive it with Jest's fake timers.
export const debounce = (fn, ms) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
};

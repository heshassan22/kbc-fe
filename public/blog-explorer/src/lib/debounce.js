// Run `fn` only after `wait` ms have passed without another call.
export const debounce = (fn, wait = 250) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
};

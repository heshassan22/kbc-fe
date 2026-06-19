// Shared helpers.

// GIVEN — run fn only after the user stops calling it for `wait` ms.
export const debounce = (fn, wait = 250) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
};

// TODO: create an element with a class + text and return it
export const el = (tag, className, text) => {
};

// TODO: shorten `text` to ~`max` chars, adding "…" when it was longer
export const excerpt = (text, max = 100) => {
};

// TODO: return a NEW array of posts, each with an `author` name from `users`
export const joinAuthors = (posts, users) => {
};

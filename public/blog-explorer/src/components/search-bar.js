import { debounce } from '../utils.js';

// A search form. Calls onSearch(query) — debounced — as the user types.
export const createSearchBar = (root, { onSearch }) => {
  const input = root.querySelector('.search__input');
  if (!input) return;

  // TODO: on the input's 'input' event (debounced), call onSearch
  //       with the trimmed, lowercased value
};

import { el, excerpt } from '../lib/dom.js';

// Renders post cards and reveals them on scroll.
// Returns { render(posts), filter(query) }.
// On a card click, dispatch a bubbling 'post:open' CustomEvent (the post in detail).
export const createPostList = (root) => {
  const render = (posts) => {
    // TODO:
    //  - build one card per post (title, author, excerpt) into a DocumentFragment
    //  - set data-title (lowercased) on each card for filtering
    //  - on card click: dispatch new CustomEvent('post:open', { detail: { post }, bubbles: true })
    //  - reveal each card with an IntersectionObserver (add 'card--in', then unobserve)
    //  - write to the DOM once (root.replaceChildren(fragment))
  };

  const filter = (query) => {
    // TODO: hide cards whose data-title doesn't include `query`
  };

  return { render, filter };
};

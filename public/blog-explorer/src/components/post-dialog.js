import { getComments } from '../api.js';
import { el } from '../lib/dom.js';

// A <dialog> showing a post and its comments. Listens for the 'post:open' event.
export const createPostDialog = (root) => {
  // TODO:
  //  - wire the .dialog__close button to root.close()
  //  - listen for 'post:open' on document; on it, read event.detail.post and:
  //      * fill .dialog__title / .dialog__author / .dialog__body
  //      * root.showModal()
  //      * fetch the post's comments (getComments(post.id)) with loading + error states,
  //        then render them into .dialog__comments
};

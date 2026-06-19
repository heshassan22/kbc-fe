import { getPosts, getUsers } from './api.js';
import { joinAuthors } from './utils.js';
import { createSearchBar } from './components/search-bar.js';
import { createPostList } from './components/post-list.js';
import { createPostDialog } from './components/post-dialog.js';

const main = async () => {
  const status = document.querySelector('.status');
  console.log('main', status);
  // TODO — wire it up:
  //  1. createPostDialog(document.querySelector('.dialog'))   // listens for 'post:open'
  //  2. const list = createPostList(document.querySelector('.posts'))
  //  3. createSearchBar(document.querySelector('.search'), { onSearch: (q) => list.filter(q) })
  //  4. show 'Loading…' in `status`, then fetch the posts and the authors and
  //     list.render(joinAuthors(posts, users)). Handle errors by writing into `status`.
};

main();

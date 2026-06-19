// Thin wrapper around the JSONPlaceholder REST API.
// https://jsonplaceholder.typicode.com/
const BASE = 'https://jsonplaceholder.typicode.com';

// fetch + status check + JSON parse, in one place
const getJSON = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
};

export const getPosts = () => getJSON(BASE + '/posts');
export const getUsers = () => getJSON(BASE + '/users');
export const getComments = (postId) => getJSON(BASE + '/posts/' + postId + '/comments');

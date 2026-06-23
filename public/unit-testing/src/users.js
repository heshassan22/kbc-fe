// loadUser(id) fetches a user from the API and returns the parsed JSON.
// Throws when the response is not ok. In tests you MOCK fetch — never hit the network.
export async function loadUser(id) {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error('not found');
  return res.json();
}

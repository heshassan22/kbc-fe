import { loadUser } from './users.js';

// Assignment Part B — MOCK fetch; the test must never hit the network.
describe('loadUser()', () => {
  afterEach(() => jest.resetAllMocks());

  it('requests the right URL and returns the parsed user', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ id: 1, name: 'Ada' }) });

    const user = await loadUser(1);

    expect(fetch).toHaveBeenCalledWith('/api/users/1');
    expect(user).toEqual({ id: 1, name: 'Ada' });
  });

  // Add a test for:
  // - rejects with 'not found' when the response is not ok ({ ok: false })
  //     await expect(loadUser(99)).rejects.toThrow('not found')
});

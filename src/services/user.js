import { request } from 'ice';

export default {
  async getUser(id) {
    return await request(`/api/users/${id}`);
  },
};

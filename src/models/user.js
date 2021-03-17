import userService from '@/services/user';
import { logger } from 'ice';

export default {
  state: {
    name: 'default',
    department: '',
    avatar: '',
    userid: null,
  },
  effects: (dispatch) => ({
    async fetchUserProfile() {
      this.update(userService.getUser().data);
    },
  }),
  reducers: {
    update(prevState, payload) {
      logger.debug(prevState);
      logger.debug(payload);
      return { ...prevState, ...payload };
    },
  },
};

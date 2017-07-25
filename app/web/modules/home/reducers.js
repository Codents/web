import * as actions from './actions';

export default (
  state = {
    isFetching: false,
    isAuthenticated: false,
  },
  action
) => {
  switch (action.type) {
    case actions.INIT_LOGIN:
      return {
        isFetching: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

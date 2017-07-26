import * as actions from './actions';

export default (
  state = {
    date: new Date(),
  },
  action
) => {
  switch (action.type) {
    case actions.INIT_APP:
      return {
        ...state,
        date: action.date,
      };
    default:
      return state;
  }
};

import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import homeReducer from '../home/reducers';

const reducer = combineReducers({
  home: homeReducer,
  rutes: routing,
});

export default reducer;

import { combineReducers } from 'redux';
import users from './module/Profile';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;

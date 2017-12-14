import users from './users'
import challenges from './challenges'
import activities from './activities'



import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  users,
  challenges,
  activities

});
export default rootReducer;

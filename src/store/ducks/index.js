import { combineReducers } from 'redux';

import user from './user';
import timeline from './timeline';
import profile from './profile';

const reducers = combineReducers({
  user,
  timeline,
  profile,
});

export default reducers;

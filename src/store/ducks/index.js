import { combineReducers } from 'redux';

import user from './user';
import timeline from './timeline';

const reducers = combineReducers({
  user,
  timeline
});

export default reducers;

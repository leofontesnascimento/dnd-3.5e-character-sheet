import { combineReducers } from 'redux';

import HitPointsReducer from './HitPointsReducer';
import ClassReducer from './ClassReducer';

export default combineReducers({
  HitPointsReducer,
  ClassReducer
});

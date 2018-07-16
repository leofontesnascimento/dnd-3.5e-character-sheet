import { combineReducers } from 'redux';

import HitPointsReducer from './HitPointsReducer';
import ClassReducer from './ClassReducer';
import RaceReducer from './RaceReducer';

export default combineReducers({
  HitPointsReducer,
  ClassReducer,
  RaceReducer
});

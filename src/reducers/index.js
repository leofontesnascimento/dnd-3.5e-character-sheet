import { combineReducers } from 'redux';

import HitPointsReducer from './HitPointsReducer';
import ClassReducer from './ClassReducer';
import RaceReducer from './RaceReducer';
import ExperienceReducer from './ExperienceReducer';
import InitiativeReducer from './InitiativeReducer';

export default combineReducers({
  HitPointsReducer,
  ClassReducer,
  RaceReducer,
  ExperienceReducer,
  InitiativeReducer
});

import { combineReducers } from 'redux';
import { timerReducer } from './timer/timerReducer';

export const rootReducer = combineReducers({
  timer: timerReducer,
})
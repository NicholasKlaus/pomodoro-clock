import { TYPES } from '../constants/types';

const initialState = {
  SessionLength: 25,
  BreakLength: 5,
  isSession: true,
  timerMinute: 25,
  timerSecond: 0,
};

export const timerReducer = (state = initialState, action) => {
  switch(action.type) {
    case TYPES.DECREMENT:
      return {

      }
    case TYPES.INCREMENT:
      return {
        
      }
    default:
      return state;
  }
}
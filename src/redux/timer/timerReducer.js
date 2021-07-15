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
    case TYPES.DECREMENT_BREAK:
      return {
        ...state,
        BreakLength: state.BreakLength - 1
      }
    case TYPES.INCREMENT_BREAK:
      return {
        ...state,
        BreakLength: state.BreakLength + 1
      }
    case TYPES.DECREMENT_SESSION:
      return {
        ...state,
        SessionLength: state.SessionLength - 1,
        timerMinute: state.timerMinute - 1
      }
    case TYPES.INCREMENT_SESSION:
      return {
        ...state,
        SessionLength: state.SessionLength + 1,
        timerMinute: state.timerMinute + 1
      }
    case TYPES.UPDATE_TIMER_MINUTE:
      return {
        ...state,
        timerMinute: state.timerMinute - 1
      }
    case TYPES.SWITCH_SESSION:
      return {
        isSession: false,
        timerMinute: state.BreakLength
      }
    case TYPES.SWITCH_BREAK:
      return {
        isSession: true,
        timerMinute: state.SessionLength
      }
    default:
      return state;
  }
}
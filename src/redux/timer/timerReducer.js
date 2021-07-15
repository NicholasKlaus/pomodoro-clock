import { TYPES } from '../constants/types';

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  interval: 'Session',
  secondsLeft: 25 * 60,
  timerRunning: false,
};

export const timerReducer = (state = initialState, action) => {
  switch(action.type) {
    case TYPES.DECREMENT_BREAK:
      return {
        ...state,
        breakLength: state.breakLength - 1
      }
    case TYPES.INCREMENT_BREAK:
      return {
        ...state,
        breakLength: state.breakLength + 1
      }
    case TYPES.DECREMENT_SESSION:
      return {
        ...state,
        sessionLength: state.sessionLength - 1,
        secondsLeft: (state.sessionLength - 1) * 60
      }
    case TYPES.INCREMENT_SESSION:
      return {
        ...state,
        sessionLength: state.sessionLength + 1,
        secondsLeft: (state.sessionLength + 1) * 60
      }
    case TYPES.START_TIMER:
      return {
        ...state,
        timerRunning: true
      }
    case TYPES.STOP_TIMER:
      return {
        ...state,
        timerRunning: false
      }
    case TYPES.RESET_TIMER:
      return {
        ...state,
        breakLength: 5,
        sessionLength: 25,
        interval: 'Session',
        secondsLeft: 25 * 60,
        timerRunning: false,
      }
    case TYPES.SWITCH_SESSION:
      return {
        ...state,
        interval: 'Session',
        secondsLeft: state.sessionLength * 60
      }
    case TYPES.SWITCH_BREAK:
      return {
        ...state,
        interval: 'Break',
        secondsLeft: state.breakLength * 60
      }
    case TYPES.DECREMENT_SECONDS:
      return {
        ...state,
        secondsLeft: state.secondsLeft - 1
      }
    default:
      return state;
  }
}
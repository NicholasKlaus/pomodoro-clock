import { TYPES } from './constants/types';

export const decrementBreak = () => {
  return {
    type: TYPES.DECREMENT_BREAK
  }
}

export const incrementBreak = () => {
  return {
    type: TYPES.INCREMENT_BREAK
  }
}

export const decrementSession = () => {
  return {
    type: TYPES.DECREMENT_SESSION
  }
}

export const incrementSession = () => {
  return {
    type: TYPES.INCREMENT_SESSION
  }
}

export const updateTimer = () => {
  return {
    type: TYPES.UPDATE_TIMER_MINUTE
  }
}

export const switchSession = () => {
  return {
    type: TYPES.SWITCH_SESSION
  }
}

export const switchBreak = () => {
  return {
    type: TYPES.SWITCH_BREAK
  }
}

export const startTimer = () => {
  return {
    type: TYPES.START_TIMER
  }
}

export const stopTimer = () => {
  return {
    type: TYPES.STOP_TIMER
  }
}

export const resetTimer = () => {
  return {
    type: TYPES.RESET_TIMER
  }
}

export const decSeconds = () => {
  return {
    type: TYPES.DEC_SECONDS
  }
}
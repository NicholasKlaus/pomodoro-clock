import { TYPES } from './constants/types';

export const decrementBreak = () => ({type: TYPES.DECREMENT_BREAK})

export const incrementBreak = () => ({type: TYPES.INCREMENT_BREAK})

export const decrementSession = () => ({type: TYPES.DECREMENT_SESSION})

export const incrementSession = () => ({type: TYPES.INCREMENT_SESSION})

export const switchSession = () => ({type: TYPES.SWITCH_SESSION})

export const switchBreak = () => ({type: TYPES.SWITCH_BREAK})

export const startTimer = () => ({type: TYPES.START_TIMER})

export const stopTimer = () => ({type: TYPES.STOP_TIMER})

export const resetTimer = () => ({type: TYPES.RESET_TIMER})

export const decSeconds = () => ({type: TYPES.DECREMENT_SECONDS})
import { TYPES } from './constants/types';

export const decreaseCounter = () => {
  return {
    type: TYPES.DECREMENT
  }
}

export const increaseCounter = () => {
  return {
    type: TYPES.INCREMENT
  }
}
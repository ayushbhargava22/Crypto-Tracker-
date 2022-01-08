/* eslint-disable no-unused-vars */
import { ActionTypes } from "../constants/action-types";

const initialState = {
  cryptoInfo: []
}

export const latestInfoReducer = (state=initialState, {payload, type}) => {
  switch (type) {
    case ActionTypes.LATEST_INFO:
      return {...state, cryptoInfo: payload};
    default:
      return state;
  }
}
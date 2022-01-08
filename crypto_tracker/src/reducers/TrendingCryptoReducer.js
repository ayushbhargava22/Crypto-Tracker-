/* eslint-disable no-unused-vars */
import { ActionTypes } from "../constants/action-types";

const initialState = {
  trendingCrypto: []
}

export const trendingCryptoReducer = (state=initialState, {payload, type}) => {
  switch (type) {
    case ActionTypes.TRENDING_CRYPTO:
      return {...state, trendingCrypto: payload};
    default:
      return state;
  }
}
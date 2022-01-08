import { ActionTypes } from "../constants/action-types"

export const trendingCrypto = (trending) => {
  return {
    type: ActionTypes.TRENDING_CRYPTO,
    payload: trending
  }
} 
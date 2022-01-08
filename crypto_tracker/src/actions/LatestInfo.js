import { ActionTypes } from "../constants/action-types"

export const latestInfo = (crypto) => {
  return {
    type: ActionTypes.LATEST_INFO,
    payload: crypto
  }
} 
import {combineReducers} from 'redux';
import {latestInfoReducer} from './LatestInfoReducer';

const reducers = combineReducers({
  latestCryptoInfo: latestInfoReducer,
})

export default reducers;
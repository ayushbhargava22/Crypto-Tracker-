import {combineReducers} from 'redux';
import {latestInfoReducer} from './LatestInfoReducer';
import { trendingCryptoReducer } from './TrendingCryptoReducer';

const reducers = combineReducers({
  latestCryptoInfo: latestInfoReducer,
  trendingCrypto: trendingCryptoReducer,
})

export default reducers;
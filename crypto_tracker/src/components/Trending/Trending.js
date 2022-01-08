import React, { useEffect } from 'react'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { trendingCrypto } from '../../actions/TrendingCrypto';

export default function Trending() {
  const trending = useSelector((state) => {return state})
  const dispatch = useDispatch();

  const fetchInformation = async () => {
    const response = await axios
    .get("https://api.coingecko.com/api/v3/search/trending")
    .catch((err) => {
      console.log("Error", err);
    })
    dispatch(trendingCrypto(response.data.coins));
  }

  useEffect(() => {
    fetchInformation();
  },[])

  const data = trending.trendingCrypto.trendingCrypto;
  console.log(data);
  return (
    <div>
      
    </div>
  )
}

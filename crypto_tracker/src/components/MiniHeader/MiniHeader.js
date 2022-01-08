import React, { useEffect } from 'react'
//import styled from 'styled-components'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {latestInfo} from '../../actions/LatestInfo'
function MiniHeader() {
  const cryptos = useSelector((state) => {return state})
  const dispatch = useDispatch();
  const fetchCrypto = async () => {
    const response = await axios
    .get("/v1/global-metrics/quotes/latest?CMC_PRO_API_KEY=74b733ae-955d-4d33-86da-863819ac408d")
    .catch((err) => {
      console.log("Error", err);
    })
    dispatch(latestInfo(response.data.data));
  }

  useEffect(() => {
    fetchCrypto();
  },[])
  console.log(cryptos);

  return (
    <div>
      
    </div>
  )
}

export default MiniHeader;

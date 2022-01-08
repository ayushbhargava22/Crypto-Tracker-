import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {latestInfo} from '../../actions/LatestInfo'

export const MiniHeaderWrapper = styled.div`
  padding-left: 15px;
`
export const MiniHeaderContainer = styled.div`
  display: flex;
`
export const CryptoInformation = styled.p`
  display: flex;
  align-items: center;
  padding: 0px;
  margin: 0px;
  padding-top: 5px;
  padding-right: 15px;
  font-size: 11px;
  color: rgb(88, 102, 126);
  white-space: nowrap;
  font-weight: 500;
`
export const DynamicData = styled.p`
  color: rgb(56, 97, 251);
  font-weight: 500;
  padding: 0px;
  margin: 0px;
  padding-left: 5px;
  font-size: 11px;
  white-space: nowrap;
`

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

  const CryptoData = cryptos.latestCryptoInfo.cryptoInfo;
  console.log(CryptoData);
  return (
    <MiniHeaderWrapper>
      <MiniHeaderContainer>
        <CryptoInformation>Cryptos: <DynamicData>{CryptoData.total_cryptocurrencies}</DynamicData></CryptoInformation>
        <CryptoInformation>Exchanges: <DynamicData>{CryptoData.active_exchanges}</DynamicData></CryptoInformation>
        <CryptoInformation>Dominance: <DynamicData>BTC:{CryptoData.btc_dominance} ETH:{CryptoData.eth_dominance}</DynamicData></CryptoInformation>
      </MiniHeaderContainer>
    </MiniHeaderWrapper>
  )
}

export default MiniHeader;

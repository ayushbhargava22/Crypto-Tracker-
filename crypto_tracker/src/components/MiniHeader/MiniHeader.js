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
    .get("https://api.coingecko.com/api/v3/global")
    .catch((err) => {
      console.log("Error", err);
    })
    dispatch(latestInfo(response.data.data));
  }

  useEffect(() => {
    fetchCrypto();
  },[])

  const CryptoData = cryptos.latestCryptoInfo.cryptoInfo;
  return (
    <MiniHeaderWrapper>
      <MiniHeaderContainer>
        <CryptoInformation>Cryptos: <DynamicData>{CryptoData.active_cryptocurrencies}</DynamicData></CryptoInformation>
        <CryptoInformation>Exchanges: <DynamicData>{CryptoData.markets}</DynamicData></CryptoInformation>
        <CryptoInformation>OnGoing ICOS: <DynamicData>{CryptoData.ongoing_icos}</DynamicData></CryptoInformation>
      </MiniHeaderContainer>
    </MiniHeaderWrapper>
  )
}

export default MiniHeader;

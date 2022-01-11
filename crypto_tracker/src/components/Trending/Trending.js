import React, { useEffect } from 'react'
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { trendingCrypto } from '../../actions/TrendingCrypto';
import styled from 'styled-components';
import TrendingIcon from '../../assests/TrendingIcon.png';
import {MdKeyboardArrowRight} from 'react-icons/md';

export const TrendingWrapper = styled.div`
  padding: 15px;
  padding-top: 45px;
` 
export const TrendingContainer = styled.div`

`
export const TrendingHeading = styled.p`
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 1.5px;
  padding: 0px;
  margin: 0px;
`
export const Box = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingBox = styled.div`
  width: 350px;
  box-shadow: rgb(88 102 126 / 8%) 0px 4px 24px, rgb(88 102 126 / 12%) 0px 1px 2px;
  border-radius: 8px;
  padding: 14px 16px 17px;
`
export const Heading = styled.div`
  align-items: center;
  font-weight: bold;
  display: flex;
`
export const Image = styled.img`
  font-size: 13px;
  padding-right: 5px;
`
export const HeadingTrend = styled.p`
  font-size: 13px;
  font-weight: bold;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 0px;
`
export const Price = styled.p`
  padding: 0px;
  margin: 0px;
  display: flex;
  align-items: center;
`
export const DataContainer = styled.div`
  padding-top: 10px;
`
export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between
`
export const Symbol = styled.p`
  font-size: 13px;
  font-weight: normal;
  padding: 0px;
  padding-left: 10px;
  margin: 0px
`
export const Button = styled.button`
  border: none;
  color: rgb(56, 97, 251);
  font-size: 15px;
  font-weight: normal;
  padding: 0px;
  padding-left: 10px;
  margin: 0px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding-top: 10px;
`

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
  return (
    <TrendingWrapper>
      <TrendingContainer>
        <TrendingHeading>Todays Cryptocurrency Prices by Market Cap</TrendingHeading>
        <Box>
          <TrendingBox>
            <Heading><Image src={TrendingIcon}></Image>Trending</Heading>
            <DataContainer>
              {data.slice(0,3).map((info) => {
                const price = info.item.price_btc;
                const start = String(price).slice(0,6);
                return (
                  <DataWrapper key={info.item.id}>
                    <HeadingTrend>{info.item.name}<Symbol>{info.item.symbol}</Symbol></HeadingTrend>
                    <Price>{start}</Price>
                  </DataWrapper>
                )
              })}
              <Button>See More <MdKeyboardArrowRight /></Button>
            </DataContainer>
          </TrendingBox>
        </Box>
      </TrendingContainer>
    </TrendingWrapper>
  )
}

import React from 'react'
import styled from 'styled-components'
import coinMarket from '../../assests/coinmarketcap.svg';
import {BsSearch} from 'react-icons/bs';
import MiniHeader from '../MiniHeader/MiniHeader';

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  margin-right: auto;
  margin-left: auto;
`
export const Nav = styled.nav`
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 18px;
`
export const HeaderLogo = styled.div`
  height: 30px;
  margin-right: auto;
`
export const HeaderLogoContainer = styled.div`
  background-image: url(${coinMarket});
  width: 250px;
  height: 30px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
`
export const Search = styled.div`

`

function Header() {
  return (
    <Nav>
      <MiniHeader />
      <HeaderWrapper>
        <HeaderLogo>
          <HeaderLogoContainer />
        </HeaderLogo>
        <Search>
          <BsSearch />
        </Search>
      </HeaderWrapper>
    </Nav>
  )
}

export default Header;

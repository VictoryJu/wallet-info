import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Donation from '../components/dashboard/Donation';
import CoinInfo from '../components/dashboard/CoinInfo';
import WalletDetail from '../components/dashboard/WalletDetail';
import WalletInfo from '../components/dashboard/WalletInfo';
import {useRecoilValue} from 'recoil';
import { walletState } from '../recoil/walletStats';
import { getTokenList} from '../services/rpc';
import { IToken } from '../intreface/token';
import { INITIAL_TOKENS, tokenIndex } from '../data/coinInfo';
import { etherFormat } from '../utils/stringFormat';
import { devices } from '../styles/theme';

const Main = () => {
  const walletId = useRecoilValue(walletState);
  const [tokens, setTokens] = useState<IToken[]>([]);

  const fetchTokenList = async ()=>{
    const tokens = await getTokenList()
    const formatEthers = handleFormatEther(tokens);
    setTokens(formatEthers);
  }

  const handleFormatEther = (tokens:string[]) =>{
    const formatTokens = tokens?.map((item:string,idx:number)=>{
      return {
        name: tokenIndex[idx],
        amount: etherFormat(item).toString()
      }
    });
    return formatTokens
  }

  useEffect(()=>{
    if(walletId) fetchTokenList();
    else setTokens([])
  },[walletId])

  return (
    <>
      <S.Container>
        <S.Title>대시보드</S.Title>
        <S.GridWrap>
          <Donation/>
          <CoinInfo tokens={tokens} />
          <WalletDetail tokens={tokens} />
          <WalletInfo tokens={tokens} />
          <S.BottmDiv/>
        </S.GridWrap>
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.div`
  margin: 0 auto;
  height:100%;
  @media ${devices.desktop} {
    max-width: 1200px;
    margin-top:40px;
  }
  `,

  Title: styled.div`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    @media ${devices.mobile} {
      width:100%;
      padding:25px 0px;
      text-align:center;
      background-color:#fff;
      border-bottom:1px solid ${({theme})=>theme.colors.gray01};
      font-size:20px;
      color: ${({theme})=>theme.colors.black02};
    }
  `,
  GridWrap: styled.div`
   @media ${devices.desktop} {
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     grid-template-rows: 1fr 3fr;
     grid-gap: 2.5%;
   }
   @media ${devices.mobile} {
    padding:0px 20px;
    display:flex;
    flex-direction:column;
    gap:15px;
   }
    height:90%;
  `,
  BottmDiv: styled.div`
    width:100%;
    min-height:100px;
  `
};

export default Main;

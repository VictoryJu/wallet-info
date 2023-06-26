import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Donation from '../components/dashboard/Donation';
import CoinInfo from '../components/dashboard/CoinInfo';
import WalletDetail from '../components/dashboard/WalletDetail';
import WalletInfo from '../components/dashboard/WalletInfo';
import {useRecoilValue} from 'recoil';
import { walletState } from '../recoil/walletStats';
import { getTokenList } from '../services/rpc';
import { IToken } from '../intreface/token';
import { tokenIndex } from '../data/coinInfo';
import { etherFormat } from '../utils/stringFormat';

const Main = () => {
  const walletId = useRecoilValue(walletState);
  const [tokens, setTokens] = useState<IToken[]>([]);

  const fetchTokenList = async ()=>{
    const tokens = await getTokenList()
    const formatEthers = handleFormatEther(tokens);
    setTokens(formatEthers);
  }

  const handleFormatEther = (tokens:string[]) =>{
    const formatTokens = tokens.map((item:string,idx:number)=>{
      return {
        name: tokenIndex[idx],
        amount: etherFormat(item)
      }
    });
    return formatTokens
  }

  useEffect(()=>{
    if(walletId) fetchTokenList();
  },[walletId])

  return (
    <>
      <S.Container>
        <S.Title>대시보드</S.Title>
        <S.GridWrap>
          <Donation/>
          <CoinInfo />
          <WalletDetail tokens={tokens} />
          <WalletInfo tokens={tokens} />
        </S.GridWrap>
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top:40px;
  `,
  Title: styled.div`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
  `,
  GridWrap: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 3fr;
    grid-gap: 2.5%;
  `,
};

export default Main;

import React, { useEffect, useState } from 'react';
import CMSection from '../common/CMSection';
import styled from 'styled-components';
import { tokenPrice } from '../../data/coinInfo';
import { IToken } from '../../intreface/token';

type Props = {
  tokens: IToken[]
}
const CoinInfo = ({tokens}:Props) => {
  const [totalPrice,setTotalPrice] = useState<string>("0");

  useEffect(()=>{
    if(tokens.length>0){
      const price = tokens.map(token=>parseFloat(token.amount)*tokenPrice[token.name]).reduce((a,b)=>a+b);
      setTotalPrice(price.toLocaleString());
    }
  },[tokens])
  
  return (
    <CMSection title="ETH 가격">
      <S.PriceLine>${tokenPrice["tETH"]}</S.PriceLine>
      <S.WalletLine>
        <S.WalletText>풀 자산 규모</S.WalletText>
        <S.WalletValue>${totalPrice}</S.WalletValue>
      </S.WalletLine>
    </CMSection>
  );
};

const S = {
  PriceLine: styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray01};
    font-size: 32px;
    font-weight: 700;
  `,
  WalletLine: styled.div`
    margin-top: 25px;
  `,
  WalletText: styled.div`
    font-size: 15px;
    letter-spacing: -0.5px;
    color: ${({ theme }) => theme.colors.gray06};
    font-weight: 500;
  `,
  WalletValue: styled.div`
    font-size: 19px;
    color: ${({ theme }) => theme.colors.black02};
    font-weight: 700;
    margin-top: 5px;
  `,
};

export default CoinInfo;

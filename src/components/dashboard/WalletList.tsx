import React from 'react';
import CMSection from '../common/CMSection';
import styled from 'styled-components';
import { IToken } from '../../intreface/token';
import { tokenPrice } from '../../data/coinInfo';
import icon from '../../assets/imgs/tDAI.png'
import { devices } from '../../styles/theme';
type Props ={
  token: IToken
}


const WalletList = ({token}:Props) => {
  const roundAmount = parseFloat(token.amount).toFixed(3);
  const tokenTotalPrice = parseFloat(token.amount) * tokenPrice[token.name];
  return (
    <>
      <S.Container>
        <S.Icon src={`./imgs/${token.name}.png`} />
        <S.Wrap>
          <S.Line>
            <S.CoinLine>
              <S.CoinText>{token.name}</S.CoinText>
              <S.CoinAmount>{roundAmount}</S.CoinAmount>
            </S.CoinLine>
          </S.Line>
          <S.CoinValue>${tokenTotalPrice.toLocaleString()}</S.CoinValue>
        </S.Wrap>
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Wrap: styled.div`
    display: flex;
    justify-content: 'space-between';
    flex: 1;
    @media ${devices.desktop} {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray01};      
      padding: 20px 0px;
    }
    @media ${devices.mobile} {
      padding: 18px 0px;
    }
  `,
  Line: styled.div`
    flex: 1;
  `,
  Icon: styled.img`
    width: 26px;
    height: 26px;
    margin-right: 15px;
  `,
  CoinLine: styled.div``,
  CoinText: styled.div`
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.4px;
  `,
  CoinAmount: styled.div`
    font-weight: 500;
    font-size: 15px;
    letter-spacing: -0.4px;
    color: ${({ theme }) => theme.colors.gray02};
    margin-top: 4px;
  `,
  CoinValue: styled.div`
    font-weight: 700;
    font-size: 15px;
    letter-spacing: -0.4px;
  `
};

export default WalletList;

import React from 'react';
import CMSection from '../common/CMSection';
import styled from 'styled-components';

const WalletList = () => {
  return (
    <>
      <S.Container>
        <S.Icon src="https://image.rocketpunch.com/company/126980/wemadetree_logo_1598350068.png?s=400x400&t=inside" />
        <S.Wrap>
          <S.Line>
            <S.CoinLine>
              <S.CoinText>WEMIX</S.CoinText>
              <S.CoinAmount>3,728,323</S.CoinAmount>
            </S.CoinLine>
          </S.Line>
          <S.CoinValue>$10,093,182</S.CoinValue>
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
    padding: 20px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray01};
    flex: 1;
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
  `,
};

export default WalletList;

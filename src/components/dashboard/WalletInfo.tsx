import React from 'react';
import CMSection from '../common/CMSection';
import styled from 'styled-components';
import WalletList from './WalletList';

const WalletInfo = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <CMSection title="자산 정보">
      <S.TitleLine>
        <span>자산 수량</span>
        <span>자산 가치</span>
      </S.TitleLine>
      {data.map((item) => {
        return <WalletList />;
      })}
    </CMSection>
  );
};

const S = {
  TitleLine: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    color: ${({ theme }) => theme.colors.gray02};
    font-size: 15px;
    font-weight: 500;
  `,
};

export default WalletInfo;

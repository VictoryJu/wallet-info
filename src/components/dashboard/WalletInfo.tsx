import React from 'react';
import CMSection from '../common/CMSection';
import styled from 'styled-components';
import WalletList from './WalletList';
import { IToken } from '../../intreface/token';
import CMEmpty from '../common/CMEmpty';

type Props = {
  tokens: IToken[]
}
const WalletInfo = ({tokens}:Props) => {
  return (
    <CMSection title="자산 정보">
      <S.TitleLine>
        <span>자산 수량</span>
        <span>자산 가치</span>
      </S.TitleLine>
      {
        tokens.length>0 ?
        tokens.map((token:IToken) => {
          return <WalletList key={token.name} token={token} />;
        })
        :
        <CMEmpty/>
      }
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

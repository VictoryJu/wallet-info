import React from 'react';
import styled from 'styled-components';
import { devices } from '../../styles/theme';

type Props = {
  children: React.ReactNode;
  title: string;
  isIcon?:boolean;
};

const CMSection = ({ children, title,isIcon }: Props) => {
  return (
    <S.Container>
      <S.Title>
        <S.EthIcon src='./imgs/tETH.png' isIcon={isIcon}/>
        {title}
      </S.Title>
      {children}
    </S.Container>
  );
};

const S = {
  Container: styled.section`
    background-color: #fff;
    border-radius: 12px;
    @media ${devices.desktop} {
      padding: 32px;      
    }
    @media ${devices.mobile} {
      padding: 25px;
    }
  `,
  Title: styled.div`
    font-weight: bold;
    font-size: 17px;
    display:flex;
    align-items:center;
  `,
  EthIcon: styled.img<{isIcon?:boolean}>`
    display: ${({isIcon})=>isIcon ? "block" : "none"};
    width:26px;
    height:26px;
    margin-right:5px;
  `
};

export default CMSection;

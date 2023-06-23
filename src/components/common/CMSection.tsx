import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  title: string;
};

const CMSection = ({ children, title }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
};

const S = {
  Container: styled.section`
    background-color: #fff;
    padding: 32px;
    border-radius: 12px;
  `,
  Title: styled.div`
    font-weight: bold;
    font-size: 17px;
  `,
};

export default CMSection;

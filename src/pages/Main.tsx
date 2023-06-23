import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <S.Container>
      <S.Title>대시보드</S.Title>
      <S.GridWrap></S.GridWrap>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    max-width: 1200px;
    margin: 0 auto;
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

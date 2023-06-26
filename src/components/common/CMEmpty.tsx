import React from 'react'
import styled from 'styled-components'

const CMEmpty = () => {
  return (
    <S.Container>
      <S.Text>지갑 연결이 필요합니다.</S.Text>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    width:100%;
    height:100%;
    position:relative;
  `,
  Text: styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    font-size:22px;
    color:${({theme})=>theme.colors.gray02};
  `
}

export default CMEmpty
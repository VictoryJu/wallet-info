import React from 'react';
import styled from 'styled-components';

type Props = {
  description: string;
  width?: string;
  height?: string;
};

const CMButton = ({ description, width, height }: Props) => {
  return (
    <S.Button width={width} height={height}>
      {description}
    </S.Button>
  );
};

const S = {
  Button: styled.button<{ width?: string; height?: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.colors.primary01};
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    border-radius: 4px;
    letter-spacing: -0.4px;
  `,
};

export default CMButton;

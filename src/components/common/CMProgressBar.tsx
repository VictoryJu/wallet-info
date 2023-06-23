import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

type Props = {
  value:number;
  maxValue:number;
}

const CMProgressBar = ({value,maxValue}:Props) => {
  const [dealt,setDealt] = useState(0);

  useEffect(() => {
    const percent = maxValue ? Math.floor((value / maxValue) * 100) : 0;
    setDealt(percent);
  }, [value, maxValue]);

  return (
    <Progress>
      <Dealt dealt={dealt} />
    </Progress>
  )
}

const Progress = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${({theme})=>theme.colors.primary04};
  border-radius:10px;
`;
const Dealt = styled.div<{ dealt: number }>`
  transition: all 0.7s;
  background: linear-gradient(45deg, ${({theme})=>theme.colors.primary05},${({theme})=>theme.colors.primary06});
  width: ${({dealt}) => dealt + "%"};
  height: 100%;
  border-radius:10px;
`;

export default CMProgressBar
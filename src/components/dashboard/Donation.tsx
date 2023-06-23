import React from 'react';
import CMSection from '../common/CMSection';
import styled from 'styled-components';
import CMButton from '../common/CMButton';

const Donation = () => {
  return (
    <CMSection title="내 이더 기부액">
      <S.DonataionWrap>
        <S.DonationTarget>$210.28</S.DonationTarget>
        <CMButton description="기부하기" />
      </S.DonataionWrap>
      <S.DonationLine>
        <S.DonationText>내 기부량</S.DonationText>
        <S.DonationValue> 0.127 ETH</S.DonationValue>
      </S.DonationLine>
      <S.TargetWrap>
        <S.TargetLine>
          <S.TargetText>달성률</S.TargetText>
          <S.TargetValue>12.80%</S.TargetValue>
        </S.TargetLine>
        <S.TargetCoin>1ETH</S.TargetCoin>
      </S.TargetWrap>
    </CMSection>
  );
};

const S = {
  DonataionWrap: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
  `,
  DonationTarget: styled.div`
    font-size: 30px;
    font-weight: 600;
  `,
  DonationLine: styled.div`
    color: ${({ theme }) => theme.colors.primary02};
    margin: 15px 0px 20px 0px;
  `,
  DonationText: styled.span`
    font-weight: 600;
  `,
  DonationValue: styled.span`
    font-weight: 700;
  `,
  TargetWrap: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  `,
  TargetLine: styled.div``,
  TargetCoin: styled.div`
    color: ${({ theme }) => theme.colors.gray06};
  `,
  TargetText: styled.span`
    color: ${({ theme }) => theme.colors.gray06};
    margin-right: 15px;
  `,
  TargetValue: styled.span`
    color: ${({ theme }) => theme.colors.primary02};
    font-weight: 600;
  `,
};

export default Donation;

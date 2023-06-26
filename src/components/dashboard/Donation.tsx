import React, { useEffect, useState } from 'react';
import CMSection from '../common/CMSection';
import styled from 'styled-components';
import CMButton from '../common/CMButton';
import CMProgressBar from '../common/CMProgressBar';
import { useRecoilValue } from 'recoil';
import { walletState } from '../../recoil/walletStats';
import { donate, getDonationAmount } from '../../services/rpc';
import { etherFormat } from '../../utils/stringFormat';
import { tokenPrice } from '../../data/coinInfo';

const Donation = () => {
  const walletId = useRecoilValue(walletState);
  const amountValue = 0.5
  const [donationAmount,setDonationAmount] = useState(0);

  const fetchDonateAmount = async ()=>{
    const amount = await getDonationAmount();
    setDonationAmount(etherFormat(amount));
  }

  const handleDonateBtn = async (amount:number)=>{
    const result = await donate(amount);
    if(result) await fetchDonateAmount();
  }

  useEffect(()=>{
    if(walletId) fetchDonateAmount();
  },[walletId])
  
  return (
    <CMSection title="내 이더 기부액">
      <S.DonataionWrap>
        <S.DonationTarget>${donationAmount * tokenPrice["tETH"]}</S.DonationTarget>
        <CMButton onClick={()=>handleDonateBtn(amountValue)} height='32px' description="기부하기" />
      </S.DonataionWrap>
      <S.DonationLine>
        <S.DonationText>내 기부량</S.DonationText>
        <S.DonationValue> {donationAmount} ETH</S.DonationValue>
      </S.DonationLine>
      <S.ProgressLine>
        <CMProgressBar value={donationAmount} maxValue={1} />       
      </S.ProgressLine>
      <S.TargetWrap>
        <S.TargetLine>
          <S.TargetText>달성률</S.TargetText>
          <S.TargetValue>{(donationAmount * 100).toFixed(2)}%</S.TargetValue>
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
  ProgressLine:styled.div`
    padding-bottom:10px;
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

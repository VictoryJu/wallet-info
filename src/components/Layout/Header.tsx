import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TitleSvg from '../../assets/imgs/TitleIcon.svg'
import CMButton from '../common/CMButton'
import FoxSvg from '../../assets/imgs/FoxIcon.svg'
import { ethers } from 'ethers'

const Header = () => {
  const [walletId,setWalletId] = useState("");

  const connectWallet = async ()=>{
    try{
      if (typeof window.ethereum !== 'undefined'){
        const provider = new ethers.BrowserProvider(window.ethereum);
        // 연결됐을때
        await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner();
        setWalletId(signer.address);
      }else{
        window.open("https://support.metamask.io/hc/ko/articles/360015489531-MetaMask-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0",'_blank');
      }
    }catch(error:any){
      if (error.code === 4001) {
        console.log('Please connect to MetaMask.');
      } else {
        console.log(error);
      }
    }
  }

  return (
    <S.Container>
      <S.Wrap>
        <S.TitleIcon/>
        {
          walletId ? 
          <S.WalletLine>
            <S.FoxIcon/>
            <S.WalletKey>0xeF...3efb</S.WalletKey>
            <S.DesConnectionTag>연결 해제</S.DesConnectionTag>
          </S.WalletLine>
          :
          <>
          <CMButton onClick={connectWallet} height='32px' description='지갑 연결하기' />
          </>
        }
      </S.Wrap>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    background-color:#fff;
    width:100%;
    height:120px;
  `,
  Wrap: styled.div`
    max-width:1200px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    padding:25px 0px;
  `,
  WalletLine: styled.div`
    display:flex;
    gap:5px;
  `,
  WalletKey: styled.span`
    font-size:14px;
    font-weight: 600;
    color: ${({theme})=>theme.colors.black03};
  `,
  DesConnectionTag: styled.span`
    color:${({theme})=>theme.colors.primary03};
    cursor: pointer;
    font-weight:500;
    font-size:14px;
  `,
  TitleIcon: styled(TitleSvg)``,
  FoxIcon: styled(FoxSvg)``
}

export default Header
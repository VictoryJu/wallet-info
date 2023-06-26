import { ethers } from "ethers";
import { testAddress } from "../data/address";
import { getDonationAmountAbi, getPoolTokenInfoAbi } from "../data/abi";

const provider = new ethers.BrowserProvider(window.ethereum);
const contractAddress = testAddress;

export const connectWallet = async ()=>{
  try{
    if (typeof window.ethereum !== 'undefined'){
      const address  = (await provider.send("eth_requestAccounts", []))[0];
      return address
    }else{
      window.open("https://metamask.io/download/",'_blank');
    }
  }catch(error:any){
    if (error.code === 4001) {
      console.log('Please connect to MetaMask.');
    } else {
      console.log(error);
    }
  }
}

export const getTokenList = async ()=>{
  try{
    //test후 본래 addredd로 교체
    const contract = new ethers.Contract(contractAddress, getPoolTokenInfoAbi, provider);
    const coins = await contract.getPoolTokenInfo();
    return coins
  }catch(e){
    console.log(e);
  }
}

export const getDonationAmount = async ()=>{
  try{
    const contract = new ethers.Contract(contractAddress,getDonationAmountAbi,provider);
    const donationAmount = await contract.getDonationAmount(contractAddress);
    return donationAmount
  }catch(e){
    console.log(e);
  }
}

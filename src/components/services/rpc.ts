import { ethers } from "ethers";

export const connectWallet = async ()=>{
    try{
      if (typeof window.ethereum !== 'undefined'){
        const provider = new ethers.BrowserProvider(window.ethereum);
        const address  = await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner();
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
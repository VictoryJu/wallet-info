import { ethers } from "ethers"

export const addressFormat = (address:string):string => {
  return `${address.slice(0,4)}....${address.slice(-4)}`
}

export const etherFormat = (ether:string):string =>{
  const etherValue = ethers.formatEther(ether);
  return etherValue
}
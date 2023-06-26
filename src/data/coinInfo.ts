import { IToken } from "../intreface/token"

export const tokenPrice:any = {
    "tETH":1653.22,  
    "tWEMIX":1.732,  
    "tUSDT":1.0014,  
    "tUSDC":0.9994,  
    "tDAI":0.9993
}

export const tokenIndex = [
  "tETH", 
  "tWEMIX",
  "tUSDT",
  "tUSDC",
  "tDAI"
]

export const INITIAL_TOKENS:IToken[] = [
  {
      name:"tETH",
      amount:"0"
  },
  {
      name:"tWEMIX",
      amount:"0"
  },
  {
      name:"tUSDT",
      amount:"0"
  },
  {
      name:"tUSDC",
      amount:"0"
  },
  {
      name:"tDAI",
      amount:"0"
  }
]
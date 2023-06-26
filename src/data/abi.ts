export const getPoolTokenInfoAbi =
[
  {
    "inputs": [],
    "name": "getPoolTokenInfo",
    "outputs": [
        {
            "components": [
                {
                    "internalType": "uint256",
                    "name": "tETHBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tWEMIXBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tUSDTBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tUSDCBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tDAIBalance",
                    "type": "uint256"
                }
            ],
            "internalType": "struct PoolTokenInfo",
            "name": "poolTokenInfo",
            "type": "tuple"
        }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export const getDonationAmountAbi = 
[
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "getDonationAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "donateVolume",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
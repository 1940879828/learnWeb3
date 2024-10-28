import {localChain} from "../App.tsx";
import {mantleTestnet, scrollSepolia, sepolia} from "wagmi/chains";

export const TOKEN_ADDRESSES:Record<number, `0x${string}`> = {
  [localChain.id]: "0x5fbdb2315678afecb367f032d93f642f64180aa3"
}

export const IUniswapV3PoolState_ADDRESSES:Record<number, `0x${string}`> = {
  [scrollSepolia.id]: "0xcEe99492E20ec67C89df1580a6bED08dC3Eb15F4",
  [mantleTestnet.id]: "0x843E9eE404d8F0Cd30EA63A2e1C3CAC0fd9622E7",
  [sepolia.id]: "0xDf4d9382839a9A84Ae93Cc6Abb866f29D3e7dDBc",
}
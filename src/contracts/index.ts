import {Abi, Address, decodeFunctionResult, DecodeFunctionResultParameters, encodeFunctionData, EncodeFunctionDataParameters, getContract} from "viem";
import {useViemClientDynamically} from "../utils/useViemClientDynamically.ts";
import {TokenAbi} from "./abis/Token.ts"
import {useChainId} from "wagmi";
import {IUniswapV3PoolState_ADDRESSES, TOKEN_ADDRESSES} from "./Adress.ts";
import {useMemo} from "react";
import {IUniswapV3PoolStateAbi} from "./abis/IUniswapV3PoolState.ts";

export const useCreateContract = ({address, abi}: {address: Address, abi: Abi}) => {
  const viemClientDynamically = useViemClientDynamically()
  if (!viemClientDynamically) return
  const contract = getContract({
    address,
    abi,
    client: viemClientDynamically
  })
  return {
    contract,
    address,
    encodeFunctionData:({functionName, args}:EncodeFunctionDataParameters) => encodeFunctionData({
      abi, functionName, args,
    }),
    decodeFunctionResult: ({functionName, data}:DecodeFunctionResultParameters) => decodeFunctionResult({
      abi, functionName, data
    })
  }
}

export const useTokenContractInstance = () => {
  const chainId = useChainId()
  const contractAddress = useMemo(()=>TOKEN_ADDRESSES[chainId],[chainId])
  return useCreateContract({address: contractAddress, abi: TokenAbi})
};

export const IUniswapV3PoolStateInstance = () => {
  const chainId = useChainId()
  const contractAddress = useMemo(()=>IUniswapV3PoolState_ADDRESSES[chainId],[chainId])
  if (!contractAddress) throw new Error(`contractAddress not find`)
  return useCreateContract({address: contractAddress, abi: IUniswapV3PoolStateAbi})
}


import {useChainId, useWriteContract} from "wagmi";
import {useCallback, useMemo} from "react";
import {TOKEN_ADDRESSES} from "../constants/token.ts";
import {TokenAbi} from '../contracts/abis/Token.ts'

export const useTokenTransfer = () => {
  const {writeContract, ...others} = useWriteContract()
  const chainId = useChainId()
  const address = useMemo(()=>TOKEN_ADDRESSES[chainId],[chainId])
  const executeTransfer = useCallback(async ({recipient, amount}:{
    recipient: `0x${string}`
    amount: string
  }) => {
    if (!address) throw  new Error(`We don't support chain-${chainId} for now`)
    return writeContract({
      address,
      abi: TokenAbi,
      functionName: 'transfer',
      args: [recipient, BigInt(amount)],
    })
  },[])
  return {executeTransfer, chainId, ...others};
}
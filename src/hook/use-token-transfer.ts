import {useChainId, useWriteContract} from "wagmi";
import {useCallback, useMemo} from "react";
import {TOKEN_ADDRESSES} from "../constants/token.ts";
import {abi} from '../contracts/abis/Token.json'

export const useTokenTransfer = () => {
  const {writeContract, ...others} = useWriteContract()
  const chainId = useChainId()
  const address = useMemo(()=>TOKEN_ADDRESSES[chainId],[chainId])
  const executeTransfer = useCallback(async ({recipient, amount}:{
    recipient: string
    amount: string
  }) => {
    if (!address) throw  new Error(`We don't support chain-${chainId} for now`)
    return writeContract({
      address,
      abi,
      functionName: 'transfer',
      args: [recipient, amount],
    })
  },[])
  return {executeTransfer, chainId, ...others};
}
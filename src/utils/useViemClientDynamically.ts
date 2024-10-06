import {http, useAccount} from "wagmi";
import {useCallback, useEffect, useState} from "react";
import {Client, createPublicClient} from "viem";

export const useViemClientDynamically = () => {
  const [viemClient, setViemClient] = useState<Client | undefined>()
  const {chain} = useAccount()

  const onChainChange = useCallback(() => {
    if (!chain) return
    const rpcUrl = chain?.rpcUrls.default.http[0]
    if (!rpcUrl) return
    setViemClient(createPublicClient({
      transport: http(rpcUrl)
    }))
  },[])

  useEffect(()=>{
    onChainChange()
  },[chain])

  return viemClient
}
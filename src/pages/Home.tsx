import { useWeb3Modal } from "@web3modal/wagmi/react";
import {useAccount, useAccountEffect, useBlockNumber, useDisconnect, useSwitchChain} from "wagmi";
import {getTokenPrice} from "../utils/utils.ts";
import {useEffect, useState} from "react";
import TestContracts from "../components/TestContracts";
import Popover from "../components/Popover";

function Home() {
  const {open} = useWeb3Modal();
  const {address, isConnected, chain, status} = useAccount();
  const {disconnect} = useDisconnect()
  const { data: latestBlock } = useBlockNumber({ chainId:chain?.id, watch: true })
  const { chains, switchChain } = useSwitchChain()
  const [tokenPrice, setTokenPrice] = useState<string>("")

  const getPrice = async () => {
    const result = await getTokenPrice()
    setTokenPrice(result)
  }

  useAccountEffect({
    onConnect(data) {
      console.log('Connected!', data)
    },
    onDisconnect() {
      console.log('Disconnected!')
    },
  })

  useEffect(() => {
    (async ()=>{
      await getPrice()
    })()
  }, []);

  return (
    <div className="flex items-start justify-center w-full pt-4">
      <div className="relative flex flex-col gap-2 items-start justify-center">
        <div className="flex gap-2 text-gray-100 items-center">
          <span>链接钱包：</span>
          <button className="border rounded px-2" onClick={() => open()}>点击链接钱包</button>
          <button className="border rounded px-2" onClick={() => disconnect()}>点击断开钱包</button>
        </div>
        <div className="flex gap-2 text-gray-100 items-center">
          <span>是否已连接钱包：</span>
          <div>{isConnected.toString()}</div>
        </div>
        <div className="flex gap-2 text-gray-100 items-center">
          <span>账户地址：</span>
          <div>{address}</div>
        </div>
        <div className="flex gap-2 text-gray-100 items-center">
          <span>当前区块链 (id: {chain?.id})：</span>
          <div>{chain?.name} </div>
        </div>
        <div className="flex gap-2 text-gray-100 items-center">
          <span>链接状态('connecting' | 'reconnecting' | 'connected' | 'disconnected')：</span>
          <div>{status}</div>
        </div>
        <div className="flex gap-2 text-gray-100 items-center">
          <span>最新的区块编号：</span>
          <div>{latestBlock?.toString()} </div>
        </div>
        <div className="flex gap-2 text-gray-100 items-center">
          <span>切换区块链：</span>
          {chains.map((chain) => (
            <button className="border rounded px-2"
                    key={chain.id} onClick={() => switchChain({chainId: chain.id})}>
              {chain.name}
            </button>
          ))}
        </div>
        <div className="flex gap-2 text-gray-100 items-center">
          <span>当前ETH价格：</span>
          <div>{tokenPrice} </div>
        </div>
        <hr className="text-gray-100 w-full" title="contract operation"/>
        <TestContracts />

        {/*test Popover*/}
        <Popover overlay={
          <div className="p-4 bg-cyan-300">this is overlay</div>
        }>
          <div className="w-[100px] h-[100px] flex items-center justify-center bg-lime-500">test Popover</div>
        </Popover>

        <div className="bg-red-950 fixed left-[500px] top-[479px]">123</div>
      </div>
    </div>
  )
}

export default Home;
import './App.css'
import {Outlet} from "react-router-dom";
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { WagmiProvider } from 'wagmi'
import {arbitrum, Chain, mainnet, sepolia} from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID

// Define my local chain
const localChain: Chain = {
  id: 31337, // 本地链的 ID
  name: 'Hardhat-Localhost', // 人类可读的名称
  nativeCurrency: {
    name: 'Hardhat-Localhost', // 原生货币的名称
    symbol: 'GO', // 原生货币符号
    decimals: 18, // 小数位数
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545/']
    }, // RPC URL
  },
  testnet: true, // 标记为测试网络
};

const chains = [mainnet, arbitrum, sepolia, localChain] as const

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: 'myWeb3LearnProject',
    description: 'AppKit Example',
    url: 'https://reown.com/appkit', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
})

createWeb3Modal({
  wagmiConfig,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: false // Optional - false as default
})

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App

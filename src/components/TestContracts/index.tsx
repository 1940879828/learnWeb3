import {useAccount, useChainId, useReadContract} from 'wagmi'
import {abi} from '../../abis/Token.json'
import {useEffect, useMemo, useState} from "react";
import {TOKEN_ADDRESSES} from "../../constants/token.ts";
import {useTokenTransfer} from "../../hook/use-token-transfer.ts";

const TestContracts = () => {
  const {address} = useAccount();
  const chainId = useChainId()
  const contractAddress = useMemo(()=>TOKEN_ADDRESSES[chainId],[chainId])
  const [currentBalance, setCurrentBalance] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const {data: hash, isPending, executeTransfer} = useTokenTransfer()

  // 读取余额
  const {data} = useReadContract({
    abi,
    functionName: 'balanceOf',
    args: [address],
    address: contractAddress,
  });

  useEffect(() => {
    if (data) {
      setCurrentBalance(data.toString()); // 将结果转换为字符串
    }
  }, [data]);


  const handleTransfer = async () => {
    if (!recipient || !amount) {
      alert("请填写收款地址和金额");
      return;
    }

    try {
      await executeTransfer({recipient, amount})
    } catch (error) {
      console.log(`交易失败: ${error}`);
    }
  };

  return (
    <>
      <div className="flex gap-2 text-gray-100 items-center">
        <div>调用Token合约的balanceOf方法：</div>
        <div>{currentBalance} </div>
      </div>
      <div className="flex flex-col mt-4 text-gray-100  border border-solid border-amber-400 p-4 rounded w-full">
        <input
          type="text"
          placeholder="收款地址"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="mb-2 p-2"
        />
        <input
          type="number"
          placeholder="转账金额"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mb-2 p-2  border border-solid border-amber-400"
        />
        <button onClick={handleTransfer} className="bg-blue-500 text-white p-2">
          转账
        </button>
        {hash && <div className="mt-2">交易发送成功: {hash}</div>}
        {isPending && "交易中"}
      </div>
    </>
  )
}

export default TestContracts;
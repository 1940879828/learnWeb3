import {useAccount} from 'wagmi'
import {useEffect, useState} from "react";
import {useTokenContractInstance} from "../../contracts";

const TestContracts = () => {
  const {address} = useAccount();
  const [currentBalance, setCurrentBalance] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const contractInstance = useTokenContractInstance()
  const contract = contractInstance?.contract

  const getCurrentBalance = async () => {
    if (!address) return
    const result = await contract?.read.balanceOf([address])
    setCurrentBalance(String(result))
  }

  useEffect(() => {
    (async ()=> {
      await getCurrentBalance()
    })()
  }, []);

  const handleTransfer = async () => {
    if (!recipient || !amount) {
      alert("请填写收款地址和金额");
      return;
    }
    try {
      const resutl = await contract?.write.transfer([recipient, amount])
      await getCurrentBalance()
      console.log('result🚀',resutl)
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
        {/*{hash && <div className="mt-2">交易发送成功: {hash}</div>}*/}
        {/*{isPending && "交易中"}*/}
      </div>
    </>
  )
}

export default TestContracts;
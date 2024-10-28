import {useState} from "react";
import {IUniswapV3PoolStateInstance} from "../../contracts";

const TestContracts = () => {
  const [slot0, setSlot0] = useState("");

  const contractInstance = IUniswapV3PoolStateInstance()
  const contract = contractInstance?.contract

  const getSlot0 = async () => {
    console.log("getSlot0")
    const result = await contract?.read.slot0()
    setSlot0(String(result))
  }

  return (
    <>
      <div className="flex gap-2 text-gray-100 items-center">
        <div onClick={getSlot0} className="cursor-pointer">slot0：</div>
        <div>{slot0} </div>
      </div>
    </>
  )
}

export default TestContracts;
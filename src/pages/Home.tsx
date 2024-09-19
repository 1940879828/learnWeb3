import {useState} from "react";
import {WagmiConfig} from "wagmi";

function Home() {
  const [isNetworkSwitchHighlighted, setIsNetworkSwitchHighlighted] =
    useState(false);
  const [isConnectHighlighted, setIsConnectHighlighted] = useState(false);

  const closeAll = () => {
    setIsNetworkSwitchHighlighted(false);
    setIsConnectHighlighted(false);
  };

  return (
    <>
      <header>
        <div
          style={{
            opacity:
              isConnectHighlighted || isNetworkSwitchHighlighted
                ? 1
                : 0,
          }}
        />
        <div>
          <div>
            <div
              onClick={closeAll}
            >
              <w3m-network-button />
            </div>
            <div
              onClick={closeAll}
            >
              <w3m-button />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Home;
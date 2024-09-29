import axios from "axios";

export async function getTokenPrice():Promise<string> {
  const apiUrls = [
    'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
    'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD',
    'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT',
  ]
  let prices = [];
  for (const apiUrl of apiUrls) {
    try {
      const response = await axios.get(apiUrl)
      if (response.data) {
        if (response?.data?.ethereum?.usd) {
          prices.push(response.data.ethereum.usd)
        }
        if (response.data?.USD) {
          prices.push(response.data.USD)
        }
        if (response.data?.price) {
          prices.push(Number(response.data.price))
        }

      }
    } catch (error) {
      console.error(`Failed to fetch price from ${apiUrl}: ${(error as Error).message}`);
    }
  }
  if (prices.length > 0) {
    const averagePrice = prices.reduce((total, price) => total + parseFloat(price), 0) / prices.length;
    return averagePrice.toFixed(2);
  } else {
    throw new Error('Failed to fetch price from all APIs');
  }
}
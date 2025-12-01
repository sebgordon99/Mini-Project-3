const axios = require("axios");

const fetchCoinData = async (api_id) => {
  const url = `https://api.coingecko.com/api/v3/coins/${api_id}`;
  const { data } = await axios.get(url);
  return {
    current_price: data.market_data.current_price.usd,
    market_cap: data.market_data.market_cap.usd
  };
};

module.exports = { fetchCoinData };

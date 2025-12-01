"use strict";
const Coin = require("../models/coinModel");
const { fetchCoinData } = require("../microservices/coingeckoService");

// crud create controllers --------------------------------
const addCoin = async (req, res) => {
  try {
    const coin = await Coin.create(req.body);
    res.status(201).json(coin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// crud read controllers ----------------------------------
const getCoins = async (req, res) => {
  const coins = await Coin.find();
  res.json(coins);
};

const getCoin = async (req, res) => {
  const coin = await Coin.findById(req.params.id);
  if (!coin) return res.status(404).json({ message: "Not found" });
  res.json(coin);
};

// crud update controllers ----------------------------------

const updateCoin = async (req, res) => {
  try {
    const coin = await Coin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(coin);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// crud delete controllers ----------------------------------

const deleteCoin = async (req, res) => {
  await Coin.findByIdAndDelete(req.params.id);
  res.json({ message: "Coin deleted" });
};

// not sure if needed but i researched that i need to be able to sync the prices
const updatePricesFromAPI = async (req, res) => {
  try {
    const coins = await Coin.find();

    for (const coin of coins) {
      const data = await fetchCoinData(coin.api_id);
      coin.current_price = data.current_price;
      coin.market_cap = data.market_cap;
      coin.last_updated = new Date();
      await coin.save();
    }

    res.json({ message: "Prices updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addCoin,
  getCoins,
  getCoin,
  updateCoin,
  deleteCoin,
  updatePricesFromAPI,
};

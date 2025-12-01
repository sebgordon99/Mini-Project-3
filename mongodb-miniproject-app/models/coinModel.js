const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coinSchema = new Schema({
   name: { type: String, required: true },
  symbol: { type: String, required: true },
  api_id: { type: String, required: true }, //something like "bitcoin"
  current_price: Number,
  market_cap: Number,
  last_updated: Date
});

module.exports = mongoose.model("Coin", coinSchema);


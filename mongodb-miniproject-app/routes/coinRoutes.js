const express = require("express");
const router = express.Router();
const {
  addCoin,
  getCoins,
  getCoin,
  updateCoin,
  deleteCoin,
  updatePricesFromAPI
} = require("../controllers/coinController");

router.route("/").post(addCoin).get(getCoins);

router.route("/update-prices").put(updatePricesFromAPI);

router.route("/:id").get(getCoin).put(updateCoin).delete(deleteCoin);

console.log("addCoin:", addCoin);
console.log("getCoins:", getCoins);
console.log("getCoin:", getCoin);
console.log("updateCoin:", updateCoin);
console.log("deleteCoin:", deleteCoin);
console.log("updatePricesFromAPI:", updatePricesFromAPI);

module.exports = router;

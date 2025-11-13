const router = require("express").Router();
// const router = express.Router();
const {getCurrencies, getCurrencyByName} = require("../controllers/currencies.controllers")

router.get("/", getCurrencies);

router.get("/:symbol",getCurrencyByName);

module.exports = { router};
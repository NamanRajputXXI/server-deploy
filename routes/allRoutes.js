const express = require("express");
const router = express.Router();

const {
  getRajasthanData,
  getHomeData,
  getHimachalData,
  getUttarakhandData,
  getKashmirData,
} = require("../controllers/allStatesData");

router.route("/getRajasthanData").get(getRajasthanData);
router.route("/getHimachalData").get(getHimachalData);
router.route("/getUttarakhandData").get(getUttarakhandData);
router.route("/getKashmirData").get(getKashmirData);
router.route("/").get(getHomeData);

module.exports = router;

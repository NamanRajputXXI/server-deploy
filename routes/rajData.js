const express = require("express");
const router = express.Router();

const {
  getAllData,
  getHomeData,
  getHimachalData,
} = require("../controllers/rajData");

router.route("/getRajasthanData").get(getAllData);
router.route("/getHimachalData").get(getHimachalData);

router.route("/").get(getHomeData);

module.exports = router;

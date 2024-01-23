const express = require("express");
const router = express.Router();

const { getAllData, getHomeData } = require("../controllers/rajData");

router.route("/getRajasthanData").get(getAllData);
router.route("/").get(getHomeData);

module.exports = router;

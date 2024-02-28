const express = require("express");
const router = express.Router();

const {
  getRajasthanData,
  getHomeData,
  getHimachalData,
  getUttarakhandData,
  getKashmirData,
  getAllStatesData,
  getSpecificDocument,
  getKeralaData,
  getAndamanData,
  getGujratData,
  getSikkimData,
} = require("../controllers/allStatesData");

router.route("/rajasthan").get(getRajasthanData);
router.route("/himachal").get(getHimachalData);
router.route("/uttarakhand").get(getUttarakhandData);
router.route("/kashmir").get(getKashmirData);
router.route("/kerala").get(getKeralaData);
router.route("/andaman").get(getAndamanData);
router.route("/gujrat").get(getGujratData);
router.route("/sikkim").get(getSikkimData);
router.route("/getRajasthanData").get(getRajasthanData);
router.route("/getHimachalData").get(getHimachalData);
router.route("/getUttarakhandData").get(getUttarakhandData);
router.route("/getKeralaData").get(getKeralaData);
router.route("/getKashmirData").get(getKashmirData);
router.route("/getAndamanData").get(getAndamanData);
router.route("/getGujratData").get(getGujratData);
router.route("/getSikkimData").get(getSikkimData);
router.route("/allStatesData").get(getAllStatesData);
router.route("/:category/:index").get(getSpecificDocument);
router.route("/").get(getHomeData);

module.exports = router;

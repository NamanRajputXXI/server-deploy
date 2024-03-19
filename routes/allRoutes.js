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
  getGoaData,
  getDelhiData,
  getPunjabData,
  getInternationalData,
  getDubaiData,
  getWestBengalData,
  getBaliData,
  getSpecificDocumentForInternational,
} = require("../controllers/allStatesData");

router.route("/rajasthan").get(getRajasthanData);
router.route("/himachal").get(getHimachalData);
router.route("/uttarakhand").get(getUttarakhandData);
router.route("/kashmir").get(getKashmirData);
router.route("/kerala").get(getKeralaData);
router.route("/andaman").get(getAndamanData);
router.route("/gujrat").get(getGujratData);
router.route("/sikkim").get(getSikkimData);
router.route("/goa").get(getGoaData);
router.route("/delhi").get(getDelhiData);
router.route("/punjab").get(getPunjabData);
router.route("/westBengal").get(getWestBengalData);
router.route("/dubai").get(getDubaiData);
router.route("/bali").get(getBaliData);
router.route("/getRajasthanData").get(getRajasthanData);
router.route("/getHimachalData").get(getHimachalData);
router.route("/getUttarakhandData").get(getUttarakhandData);
router.route("/getKeralaData").get(getKeralaData);
router.route("/getKashmirData").get(getKashmirData);
router.route("/getAndamanData").get(getAndamanData);
router.route("/getGujratData").get(getGujratData);
router.route("/getSikkimData").get(getSikkimData);
router.route("/getGoaData").get(getGoaData);
router.route("/getDelhiData").get(getDelhiData);
router.route("/getPunjabata").get(getPunjabData);

router.route("/allStatesData").get(getAllStatesData);
router.route("/internationalData").get(getInternationalData);
router.route("/:category/:index").get(getSpecificDocument);
router.route("/").get(getHomeData);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getRajasthanData,
  getHomeData,
  getHimachalData,
  getUttarakhandData,
  getKashmirData,
  getAllStatesData,
  getKeralaData,
  getAndamanData,
  getGujratData,
  getSikkimData,
  getGoaData,
  getDelhiData,
  getPunjabData,
  getWestBengalData,
  getOdishaData,
  getLadakhData,
} = require("../controllers/domestic/allStatesData");
const {
  getInternationalData,
  getDubaiData,
  getBaliData,
  getThailandData,
  getSingaporeData,
  getBhutanData,
  getNepalData,
} = require("../controllers/international/internationData");
const { getSpecificDocument } = require("../controllers/getSpecificDoc");

// routes for domestic destinations
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
router.route("/odisha").get(getOdishaData);
router.route("/ladakh").get(getLadakhData);

//routes for international destination
router.route("/dubai").get(getDubaiData);
router.route("/bali").get(getBaliData);
router.route("/thailand").get(getThailandData);
router.route("/singapore").get(getSingaporeData);
router.route("/bhutan").get(getBhutanData);
router.route("/nepal").get(getNepalData);

router.route("/allStatesData").get(getAllStatesData);
router.route("/internationalData").get(getInternationalData);
router.route("/:category/:index").get(getSpecificDocument);
router.route("/").get(getHomeData);

module.exports = router;

const express = require("express");
const router = express.Router();

// Controllers for the dometic states
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

// controllers for the international destination
const {
  //!routes for the weekend trip  getInternationalData,
  getDubaiData,
  getBaliData,
  getThailandData,
  getSingaporeData,
  getBhutanData,
  getNepalData,
  getMalaysiaData,
  getVietnamData,
  getInternationalData,
} = require("../controllers/international/internationData");

// controller for the weekend trip
const {
  getWeekendTrendingData,
} = require("../controllers/weekend/trendingExclusivePackage");
const {
  getAllWeekendStateData,
  getDelhiWeekend,
  getMumbaiWeekend,
  getChennaiWeekend,
  getBangaloreWeekend,
  getNagpurWeekend,
  getHydrabadWeekend,
  getCochinWeekend,
  getPuneWeekend,
  getChandigarhWeekend,
  getAhmedabadWeekend,
  getJaipurWeekend,
} = require("../controllers/weekend/domestic/domesticWeekend");
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
router.route("/malaysia").get(getMalaysiaData);
router.route("/vietnam").get(getVietnamData);

// 1. Routes for the exclusive weekend
router.route("/weekendTrip").get(getWeekendTrendingData);

// 2. Routes for the all state weekend
router.route("/allStateWeekend").get(getAllWeekendStateData);

//3. Routes for the  state weekend

router.route("/delhiWeekend").get(getDelhiWeekend);
router.route("/mumbaiWeekend").get(getMumbaiWeekend);
router.route("/chennaiWeekend").get(getChennaiWeekend);
router.route("/bangaloreWeekend").get(getBangaloreWeekend);
router.route("/nagpurWeekend").get(getNagpurWeekend);
router.route("/hyderabadWeekend").get(getHydrabadWeekend);
router.route("/jaipurWeekend").get(getJaipurWeekend);
router.route("/puneWeekend").get(getPuneWeekend);
router.route("/ahmedabadWeekend").get(getAhmedabadWeekend);
router.route("/cochinWeekend").get(getCochinWeekend);
router.route("/chandigarhWeekend").get(getChandigarhWeekend);

router.route("/allStatesData").get(getAllStatesData);
router.route("/internationalData").get(getInternationalData);
router.route("/:category/:index").get(getSpecificDocument);
router.route("/").get(getHomeData);

module.exports = router;

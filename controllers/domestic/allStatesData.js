const Rajasthan = require("../../models/domestic/rajData");
const Himachal = require("../../models/domestic/himachalData");
const Uttarakhand = require("../../models/domestic/uttarakhandData");
const Kashmir = require("../../models/domestic/kashmirData");
const Kerala = require("../../models/domestic/keralaData");
const Andaman = require("../../models/domestic/andamanData");
const Gujrat = require("../../models/domestic/gujratData");
const Sikkim = require("../../models/domestic/sikkimData");
const Goa = require("../../models/domestic/goaData");
const Delhi = require("../../models/domestic/delhiData");
const Punjab = require("../../models/domestic/punjabData");
const WestBengal = require("../../models/domestic/westBengalData");
const Odisha = require("../../models/domestic/odishaData");
const asyncWrapper = require("../../middleware/async");

const getRajasthanData = asyncWrapper(async (req, res) => {
  const data = await Rajasthan.find({});
  res.status(200).json({ data });
});

const getHimachalData = asyncWrapper(async (req, res) => {
  const data = await Himachal.find({});
  res.status(200).json({ data });
});
const getUttarakhandData = asyncWrapper(async (req, res) => {
  const data = await Uttarakhand.find({});
  res.status(200).json({ data });
});
const getKashmirData = asyncWrapper(async (req, res) => {
  const data = await Kashmir.find({});
  res.status(200).json({ data });
});
const getKeralaData = asyncWrapper(async (req, res) => {
  const data = await Kerala.find({});
  res.status(200).json({ data });
});
const getAndamanData = asyncWrapper(async (req, res) => {
  const data = await Andaman.find({});
  res.status(200).json({ data });
});
const getGujratData = asyncWrapper(async (req, res) => {
  const data = await Gujrat.find({});
  res.status(200).json({ data });
});
const getSikkimData = asyncWrapper(async (req, res) => {
  const data = await Sikkim.find({});
  res.status(200).json({ data });
});
const getGoaData = asyncWrapper(async (req, res) => {
  const data = await Goa.find({});
  res.status(200).json({ data });
});
const getDelhiData = asyncWrapper(async (req, res) => {
  const data = await Delhi.find({});
  res.status(200).json({ data });
});
const getPunjabData = asyncWrapper(async (req, res) => {
  const data = await Punjab.find({});
  res.status(200).json({ data });
});
const getWestBengalData = asyncWrapper(async (req, res) => {
  const data = await WestBengal.find({});
  res.status(200).json({ data });
});
const getOdishaData = asyncWrapper(async (req, res) => {
  const data = await Odisha.find({});
  res.status(200).json({ data });
});

const getHomeData = asyncWrapper(async (req, res) => {
  res.status(200).send("go to /getRajasthanData");
});
const getAllStatesData = asyncWrapper(async (req, res) => {
  const rajasthan = await Rajasthan.find({});
  const himachal = await Himachal.find({});
  const uttarakhand = await Uttarakhand.find({});
  const kashmir = await Kashmir.find({});
  const kerala = await Kerala.find({});
  const andaman = await Andaman.find({});
  const gujrat = await Gujrat.find({});
  const sikkim = await Sikkim.find({});
  const goa = await Goa.find({});
  const delhi = await Delhi.find({});
  const punjab = await Punjab.find({});
  const westBengal = await WestBengal.find({});
  const odisha = await Odisha.find({});

  res.status(200).json({
    rajasthan,
    himachal,
    uttarakhand,
    kashmir,
    kerala,
    andaman,
    gujrat,
    sikkim,
    goa,
    delhi,
    punjab,
    westBengal,
    odisha,
  });
});

module.exports = {
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
};

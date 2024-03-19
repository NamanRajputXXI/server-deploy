const Rajasthan = require("../models/rajData");
const Himachal = require("../models/himachalData");
const Uttarakhand = require("../models/uttarakhandData");
const Kashmir = require("../models/kashmirData");
const Kerala = require("../models/keralaData");
const Andaman = require("../models/andamanData");
const Gujrat = require("../models/gujratData");
const Sikkim = require("../models/sikkimData");
const Goa = require("../models/goaData");
const Delhi = require("../models/delhiData");
const Punjab = require("../models/punjabData");
const Dubai = require("../models/dubaiData");
const WestBengal = require("../models/westBengalData");
const Bali = require("../models/baliData");
const Thailand = require("../models/thailandData");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

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
const getBaliData = asyncWrapper(async (req, res) => {
  const data = await Bali.find({});
  res.status(200).json({ data });
});
const getThailandData = asyncWrapper(async (req, res) => {
  const data = await Thailand.find({});
  res.status(200).json({ data });
});
const getDubaiData = asyncWrapper(async (req, res) => {
  const data = await Dubai.find({});
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
  });
});

const getInternationalData = asyncWrapper(async (req, res) => {
  const dubai = await Dubai.find({});
  const bali = await Bali.find({});
  const thailand = await Thailand.find({});
  res.status(200).json({
    dubai,
    bali,
    thailand,
  });
});

const getSpecificDocument = asyncWrapper(async (req, res) => {
  const { category, index } = req.params;

  let collection;
  switch (category.toLowerCase()) {
    case "rajasthan":
      collection = Rajasthan;
      break;
    case "himachal":
      collection = Himachal;
      break;
    case "uttarakhand":
      collection = Uttarakhand;
      break;
    case "kashmir":
      collection = Kashmir;
      break;
    case "kerala":
      collection = Kerala;
      break;
    case "andaman":
      collection = Andaman;
      break;
    case "gujrat":
      collection = Gujrat;
      break;
    case "sikkim":
      collection = Sikkim;
      break;
    case "goa":
      collection = Goa;
      break;
    case "delhi":
      collection = Delhi;
      break;
    case "punjab":
      collection = Punjab;
      break;
    case "dubai":
      collection = Dubai;
      break;
    case "westbengal":
      collection = WestBengal;
      break;
    case "bali":
      collection = Bali;
      break;
    case "thailand":
      collection = Thailand;
      break;
    default:
      return res.status(404).json({ message: "Category not found" });
  }

  const parsedIndex = parseInt(index);

  if (isNaN(parsedIndex) || parsedIndex < 0) {
    return res.status(400).json({ message: "Invalid index" });
  }

  const data = await collection.findOne({}).skip(parsedIndex).limit(1);

  if (!data) {
    return res.status(404).json({ message: "Document not found" });
  }

  res.status(200).json({ data });
});

module.exports = {
  getRajasthanData,
  getHomeData,
  getDubaiData,
  getHimachalData,
  getUttarakhandData,
  getKashmirData,
  getAllStatesData,
  getInternationalData,
  getSpecificDocument,
  getKeralaData,
  getAndamanData,
  getGujratData,
  getSikkimData,
  getGoaData,
  getDelhiData,
  getPunjabData,
  getWestBengalData,
  getBaliData,
  getThailandData,
};

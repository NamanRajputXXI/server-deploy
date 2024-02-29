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
  });
});

const getSpecificDocument = asyncWrapper(async (req, res) => {
  const { category, index } = req.params;

  let collection;
  switch (category) {
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
};

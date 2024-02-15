const Rajasthan = require("../models/rajData");
const Himachal = require("../models/himachalData");
const Uttarakhand = require("../models/uttarakhandData");
const Kashmir = require("../models/kashmirData");
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

const getHomeData = asyncWrapper(async (req, res) => {
  res.status(200).send("go to /getRajasthanData");
});
const getAllStatesData = asyncWrapper(async (req, res) => {
  const rajasthanData = await Rajasthan.find({});
  const himachalData = await Himachal.find({});
  const uttarakhandData = await Uttarakhand.find({});
  const kashmirData = await Kashmir.find({});

  res.status(200).json({
    rajasthanData,
    himachalData,
    uttarakhandData,
    kashmirData,
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
};

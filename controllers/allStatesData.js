const Rajasthan = require("../models/rajData");
const Himachal = require("../models/himachalData");
const Uttarakhand = require("../models/uttarakhandData");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllData = asyncWrapper(async (req, res) => {
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

const getHomeData = asyncWrapper(async (req, res) => {
  res.status(200).send("go to /getRajasthanData");
});

module.exports = {
  getAllData,
  getHomeData,
  getHimachalData,
  getUttarakhandData,
};

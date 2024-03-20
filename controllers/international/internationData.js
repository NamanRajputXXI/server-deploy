const Bali = require("../../models/international/baliData");
const Thailand = require("../../models/international/thailandData");
const Dubai = require("../../models/international/dubaiData");
const asyncWrapper = require("../../middleware/async");

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

module.exports = {
  getDubaiData,
  getInternationalData,
  getBaliData,
  getThailandData,
};

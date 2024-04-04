const Bali = require("../../models/international/baliData");
const Thailand = require("../../models/international/thailandData");
const Dubai = require("../../models/international/dubaiData");
const Singapore = require("../../models/international/singaporeData");
const Bhutan = require("../../models/international/bhutanData");
const Nepal = require("../../models/international/nepalData");
const Malaysia = require("../../models/international/malaysiaData");
const Vietnam = require("../../models/international/vietnamData");

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
const getSingaporeData = asyncWrapper(async (req, res) => {
  const data = await Singapore.find({});
  res.status(200).json({ data });
});
const getBhutanData = asyncWrapper(async (req, res) => {
  const data = await Bhutan.find({});
  res.status(200).json({ data });
});
const getNepalData = asyncWrapper(async (req, res) => {
  const data = await Nepal.find({});
  res.status(200).json({ data });
});
const getMalaysiaData = asyncWrapper(async (req, res) => {
  const data = await Malaysia.find({});
  res.status(200).json({ data });
});
const getVietnamData = asyncWrapper(async (req, res) => {
  const data = await Vietnam.find({});
  res.status(200).json({ data });
});

const getInternationalData = asyncWrapper(async (req, res) => {
  const dubai = await Dubai.find({});
  const bali = await Bali.find({});
  const thailand = await Thailand.find({});
  const singapore = await Singapore.find({});
  const bhutan = await Bhutan.find({});
  const nepal = await Nepal.find({});
  const malaysia = await Malaysia.find({});
  const vietnam = await Vietnam.find({});
  res.status(200).json({
    dubai,
    bali,
    thailand,
    singapore,
    bhutan,
    nepal,
    malaysia,
    vietnam,
  });
});

module.exports = {
  getDubaiData,
  getInternationalData,
  getBaliData,
  getThailandData,
  getSingaporeData,
  getBhutanData,
  getNepalData,
  getMalaysiaData,
  getVietnamData,
};

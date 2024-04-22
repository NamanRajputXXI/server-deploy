const asyncWrapper = require("../../../middleware/async");
const WeekendDelhi = require("../../../models/weekend/domestic/delhiWeekendData");
const WeekendMumbai = require("../../../models/weekend/domestic/mumbaiWeekendData");
const WeekendChennai = require("../../../models/weekend/domestic/chennaiWeekendData");
const WeekendBangalore = require("../../../models/weekend/domestic/bangaloreWeekendData");
const WeekendNagpur = require("../../../models/weekend/domestic/nagpurWeekendData");
const WeekendHydrabad = require("../../../models/weekend/domestic/hydrabadWeekendData");
const WeekendAhmedabad = require("../../../models/weekend/domestic/ahmedabadWeekendData");
const WeekendChandigarh = require("../../../models/weekend/domestic/chandigarhWeekendData");
const WeekendCochin = require("../../../models/weekend/domestic/cochinWeekendData");
const WeekendPune = require("../../../models/weekend/domestic/puneWeekendData");
const WeekendJaipur = require("../../../models/weekend/domestic/jaipurWeekendData");

const getDelhiWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendDelhi.find({});
  res.status(200).json({ data });
});
const getMumbaiWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendMumbai.find({});
  res.status(200).json({ data });
});
const getChennaiWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendChennai.find({});
  res.status(200).json({ data });
});
const getBangaloreWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendBangalore.find({});
  res.status(200).json({ data });
});
const getNagpurWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendNagpur.find({});
  res.status(200).json({ data });
});
const getHydrabadWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendHydrabad.find({});
  res.status(200).json({ data });
});
const getAhmedabadWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendAhmedabad.find({});
  res.status(200).json({ data });
});
const getChandigarhWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendChandigarh.find({});
  res.status(200).json({ data });
});
const getPuneWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendPune.find({});
  res.status(200).json({ data });
});
const getJaipurWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendJaipur.find({});
  res.status(200).json({ data });
});
const getCochinWeekend = asyncWrapper(async (req, res) => {
  const data = await WeekendCochin.find({});
  res.status(200).json({ data });
});

const getAllWeekendStateData = asyncWrapper(async (req, res) => {
  const WeekendDelhi = await WeekendDelhi.find({});
  res.status(200).json({
    WeekendDelhi,
  });
  const WeekendMumbai = await WeekendMumbai.find({});
  res.status(200).json({
    WeekendMumbai,
  });
  const WeekendChennai = await WeekendChennai.find({});
  res.status(200).json({
    WeekendChennai,
  });
  const WeekendBangalore = await WeekendBangalore.find({});
  res.status(200).json({
    WeekendBangalore,
  });
  const WeekendNagpur = await WeekendNagpur.find({});
  res.status(200).json({
    WeekendBangalore,
  });
  const WeekendHydrabad = await WeekendHydrabad.find({});
  res.status(200).json({
    WeekendHydrabad,
  });
  const WeekendAhmedabad = await WeekendAhmedabad.find({});
  res.status(200).json({
    WeekendAhmedabad,
  });
  const WeekendChandigarh = await WeekendChandigarh.find({});
  res.status(200).json({
    WeekendChandigarh,
  });
  const WeekendPune = await WeekendPune.find({});
  res.status(200).json({
    WeekendPune,
  });
  const WeekendJaipur = await WeekendJaipur.find({});
  res.status(200).json({
    WeekendJaipur,
  });
  const WeekendCochin = await WeekendCochin.find({});
  res.status(200).json({
    WeekendCochin,
  });
});

module.exports = {
  getAllWeekendStateData,
  getDelhiWeekend,
  getMumbaiWeekend,
  getChennaiWeekend,
  getBangaloreWeekend,
  getNagpurWeekend,
  getHydrabadWeekend,
  getAhmedabadWeekend,
  getChandigarhWeekend,
  getPuneWeekend,
  getJaipurWeekend,
  getCochinWeekend,
};

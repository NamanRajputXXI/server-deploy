const asyncWrapper = require("../../../middleware/async");
const WeekendDelhi = require("../../../models/weekend/domestic/delhiWeekendData");
const WeekendMumbai = require("../../../models/weekend/domestic/mumbaiWeekendData");
const WeekendChennai = require("../../../models/weekend/domestic/chennaiWeekendData");
const WeekendBangalore = require("../../../models/weekend/domestic/bangaloreWeekendData");

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
});

module.exports = {
  getAllWeekendStateData,
  getDelhiWeekend,
  getMumbaiWeekend,
  getChennaiWeekend,
  getBangaloreWeekend,
};

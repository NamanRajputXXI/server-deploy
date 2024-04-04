const Rajasthan = require("../models/domestic/rajData");
const Himachal = require("../models/domestic/himachalData");
const Uttarakhand = require("../models/domestic/uttarakhandData");
const Kashmir = require("../models/domestic/kashmirData");
const Kerala = require("../models/domestic/keralaData");
const Andaman = require("../models/domestic/andamanData");
const Gujrat = require("../models/domestic/gujratData");
const Sikkim = require("../models/domestic/sikkimData");
const Goa = require("../models/domestic/goaData");
const Delhi = require("../models/domestic/delhiData");
const Punjab = require("../models/domestic/punjabData");
const Dubai = require("../models/international/dubaiData");
const WestBengal = require("../models/domestic/westBengalData");
const Odisha = require("../models/domestic/odishaData");
const Ladakh = require("../models/domestic/ladakhData");
const Bali = require("../models/international/baliData");
const Thailand = require("../models/international/thailandData");
const Singapore = require("../models/international/singaporeData");
const Bhutan = require("../models/international/bhutanData");
const Nepal = require("../models/international/nepalData");
const Malaysia = require("../models/international/malaysiaData");
const Vietnam = require("../models/international/vietnamData");

const asyncWrapper = require("../middleware/async");

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
    case "odisha":
      collection = Odisha;
      break;
    case "ladakh":
      collection = Ladakh;
      break;
    case "bali":
      collection = Bali;
      break;
    case "thailand":
      collection = Thailand;
      break;
    case "singapore":
      collection = Singapore;
      break;
    case "bhutan":
      collection = Bhutan;
      break;
    case "nepal":
      collection = Nepal;
      break;
    case "malaysia":
      collection = Malaysia;
      break;
    case "vietnam":
      collection = Vietnam;
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
  getSpecificDocument,
};

const asyncWrapper = require("../../../middleware/async");
const KashmirHotels = require("../../../models/hotels/kashmir");
const kashmirHotelsData = asyncWrapper(async (req, res) => {
  const data = await KashmirHotels.find({});
  res.status(200).json({ data });
});
module.exports = {
  kashmirHotelsData,
};

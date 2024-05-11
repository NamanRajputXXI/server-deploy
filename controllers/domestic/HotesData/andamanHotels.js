const asyncWrapper = require("../../../middleware/async");
const AndamanHotels = require("../../../models/hotels/andaman");
const andamanHotelsData = asyncWrapper(async (req, res) => {
  const data = await AndamanHotels.find({});
  res.status(200).json({ data });
});
module.exports = {
  andamanHotelsData,
};

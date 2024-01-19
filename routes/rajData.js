const express = require("express")
const router = express.Router()

const { getAllData } = require("../controllers/rajData")

router.route("/getRajasthanData").get(getAllData)

module.exports = router
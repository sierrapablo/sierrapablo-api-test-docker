const express = require("express");
const router = express.Router();
const { getTest } = require("../controllers/testController").default;

router.get("/test", getTest);

module.exports = router;

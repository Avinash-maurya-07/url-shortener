const express = require("express");
const {
  handleGenerateNewShorturl,
  handleGetRedirect,
  handleAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShorturl);
router.get("/analytics/:id", handleAnalytics); 
router.get("/:id", handleGetRedirect);

module.exports = router;

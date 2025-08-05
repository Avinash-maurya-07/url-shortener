const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShorturl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });

  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

async function handleGetRedirect(req, res) {
  const shortId = req.params.id;

  const entry = await URL.findOne({ shortId });
  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }
  entry.visitHistory.push({ timestamp: Date.now() });
  await entry.save();

  return res.redirect(entry.redirectURL);
}
async function handleAnalytics(req, res) {
  const shortId = req.params.id;

  const entry = await URL.findOne({ shortId });
  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  return res.json({
    totalClicks: entry.visitHistory.length,
    visitHistory: entry.visitHistory,
  });
}


module.exports = {
  handleGenerateNewShorturl,
  handleGetRedirect,
  handleAnalytics, 
};

const express = require("express");
const crypto = require("crypto");

const router = express.Router();

router.post("/signature", (req, res) => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const { upload_preset, folder } = req.body || {};

    const paramsToSign = [];
    if (folder) paramsToSign.push(`folder=${folder}`);
    paramsToSign.push(`timestamp=${timestamp}`);
    if (upload_preset) paramsToSign.push(`upload_preset=${upload_preset}`);

    const stringToSign = paramsToSign.sort().join("&") + process.env.CLOUDINARY_API_SECRET;
    const signature = crypto.createHash("sha1").update(stringToSign).digest("hex");

    res.json({
      timestamp,
      signature,
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
    });
  } catch (error) {
    console.error("Signature generation error:", error);
    res.status(500).json({ message: "Failed to generate signature", error: error.message });
  }
});

module.exports = router;

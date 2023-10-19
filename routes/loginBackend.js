const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", (req, res) => {
  const admin = JSON.parse(fs.readFileSync("./data/admin.json"));
  if (
    req.body.username === admin.username &&
    req.body.password === admin.password
  ) {
    req.session.isAuthenticated = true;
    res.json({ success: true, message: "Logged in successfully" });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

module.exports = router;

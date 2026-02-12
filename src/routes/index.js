const express = require("express");
const router = express.Router();

const analyticsRoutes = require("./analytics.routes");

router.use("/analytics", analyticsRoutes);

module.exports = router;

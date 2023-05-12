const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../../controllers/reviews");

router.post("/posts/:id/reviews", reviewsCtrl.create);
router.delete("/reviews/:id", reviewsCtrl.deleteReview);

module.exports = router;

const express = require("express");
const router = express.Router();
const bookmarksCtrl = require("../../controllers/bookmarks");

router.post("/posts/:id/bookmarks", bookmarksCtrl.create);
router.delete("/bookmarks/:id", bookmarksCtrl.deleteBookmark);

module.exports = router;

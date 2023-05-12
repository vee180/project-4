const Post = require("../models/post");

module.exports = {
  create,
  deleteBookmark,
};

async function create(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    post.bookmarks.push({ username: req.user.username, userId: req.user._id }); //mutating a document
    await post.save(); // save it
    res.status(201).json({ data: "bookmark added" });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function deleteBookmark(req, res) {
  try {
    const post = await Post.findOne({
      "bookmarks._id": req.params.id,
      "bookmarks.username": req.user.username,
    });
    post.bookmarks.remove(req.params.id);
    await post.save();

    res.json({ data: "bookmark removed" });
  } catch (err) {
    res.status(400).json({ err });
  }
}

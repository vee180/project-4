const Post = require("../models/post");

module.exports = {
  create,
  deleteReview,
};

async function create(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    post.reviews.push({
      username: req.user.username,
      userId: req.user._id,
      rating: Number(req.body.rating),
      text: req.body.body,
    }); //mutating a document
    await post.save(); // save it
    res.status(201).json({ data: "review added" });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function deleteReview(req, res) {
  try {
    const post = await Post.findOne({
      "reviews._id": req.params.id,
      "reviews.username": req.user.username,
    });
    post.reviews.remove(req.params.id);

    await post.save();

    res.json({ data: "review removed" });
  } catch (err) {
    res.status(400).json({ err });
  }
}

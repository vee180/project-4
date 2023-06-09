const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const reviewsSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  text: String,
});


const postSchema = new mongoose.Schema({
  // One User has many Posts, Post belongs to a User
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  photoUrl: String,
  caption: String,

  // One Post has many likes, like belongs to a POST
  likes: [likesSchema],
  //One Post has many reviews, review belongs to a Post
  reviews: [reviewsSchema],
  
});

module.exports = mongoose.model("Post", postSchema);

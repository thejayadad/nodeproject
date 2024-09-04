const mongoose = require("mongoose");

// Define the Post Schema
const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a post title"], // This field is required
    },
    description: {
      type: String,
      required: [true, "Please enter a post description"], // This field is required
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Post model
const Post = mongoose.model("Post", PostSchema);

module.exports = Post;

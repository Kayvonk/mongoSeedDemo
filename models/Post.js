const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: "You must enter text to post",
      minlength: 1,
      maxlength: 250,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    id: false,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;

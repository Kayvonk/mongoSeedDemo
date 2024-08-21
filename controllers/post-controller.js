const { Post } = require("../models");

const postController = {
  // get all posts
  async getPosts(req, res) {
    try {
      const dbPostData = await Post.find().sort({ createdAt: -1 });

      res.json(dbPostData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = postController;

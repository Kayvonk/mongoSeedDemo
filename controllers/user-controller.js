const { User, Thought } = require("../models");

const userController = {
  // get all users, populating where the field name is posts
  async getUsers(req, res) {
    try {
      const dbUserData = await User.find().select("-__v").populate("posts");

      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = userController;

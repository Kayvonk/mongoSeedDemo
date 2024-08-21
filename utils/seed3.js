const mongoose = require("mongoose");
const db = require("../models");
const { ObjectId } = require("mongoose").Types;

// Remember to change seedsDemo in the mongoose.connect to your database name
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/seedsDemo");
const postSeed = [
  {
    _id: new ObjectId(),
    postText: "I have a post",
    username: "Kitty",
  },
  {
    _id: new ObjectId(),
    postText: "I have another post",
    username: "Kitty",
  },
  {
    _id: new ObjectId(),
    postText: "I have post too!",
    username: "Doge",
  },
];

const userSeed = [
  {
    _id: new ObjectId(),
    username: "Kitty",
    profileImage:
      "https://i.guim.co.uk/img/media/8282695e7f658f7c8e708290c93f14b84f0c8a68/0_483_3600_2161/master/3600.jpg?width=1200&quality=85&auto=format&fit=max&s=be4a8a7eb16cabc3d9829945e6881aa4",
    posts: [postSeed[0]._id, postSeed[1]._id],
  },
  {
    username: "Doge",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/en/1/14/Balltze_%28Cheems%29.jpg",
    posts: [postSeed[2]._id],
  },
];

userSeed[0].friends = [userSeed[1]._id];

async function seedDatabase() {
  try {
    await db.Post.deleteMany({});
    const postResult = await db.Post.insertMany(postSeed);
    console.log(postResult.length, "posts seeded.");

    await db.User.deleteMany({});
    const userResult = await db.User.insertMany(userSeed);
    console.log(userResult.length, "users seeded.");

    process.exit(0);
  } catch (err) {
    console.error("Error seeding database:", err);

    process.exit(1);
  }
}

seedDatabase();

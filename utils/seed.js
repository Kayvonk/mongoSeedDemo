const mongoose = require("mongoose");
const db = require("../models");

// Remember to change seedsDemo in the mongoose.connect to your database name
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/seedsDemo");

const newUserSeed = [
  {
    username: "Kitty",
    profileImage:
      "https://i.guim.co.uk/img/media/8282695e7f658f7c8e708290c93f14b84f0c8a68/0_483_3600_2161/master/3600.jpg?width=1200&quality=85&auto=format&fit=max&s=be4a8a7eb16cabc3d9829945e6881aa4",
  },
  {
    username: "Doge",
    profileImage:
      "https://upload.wikimedia.org/wikipedia/en/1/14/Balltze_%28Cheems%29.jpg",
  },
];
db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(newUserSeed))
  .then((data) => {
    console.log(data.insertedCount, "users seeded.");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

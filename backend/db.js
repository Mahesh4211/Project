const mongoose = require("mongoose");

const url =
"mongodb://sudhirkadam:sudhir@cluster0-shard-00-00.abhgw.mongodb.net:27017,cluster0-shard-00-01.abhgw.mongodb.net:27017,cluster0-shard-00-02.abhgw.mongodb.net:27017/quora-clone-mern?ssl=true&replicaSet=atlas-sdsb9x-shard-0&authSource=admin&retryWrites=true&w=majority"
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
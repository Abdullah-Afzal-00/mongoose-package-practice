const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Test_DB");

console.log(mongoose.connection.readyState);
const dataSchema = new mongoose.Schema({
  name: String,
  class: String,
});
const saveinDB = async () => {
  const fistCollectionModel = mongoose.model("firstCollection", dataSchema);
  let data = new fistCollectionModel({ name: "ali", class: "meta" });
  let result = await data.save();
  console.log(result);
};

const updateinDB = async () => {
  const fistCollectionModel = mongoose.model("firstCollection", dataSchema);
  let data = await fistCollectionModel.updateOne(
    { name: "ali" },
    { $set: { class: "cool", name: "arshad" } }
  );
  console.log(data);
};

const deleteinDB = async () => {
  const firstCollectionModel = mongoose.model("firstCollection", dataSchema);
  let data = await firstCollectionModel.deleteOne({
    name: "ali",
  });
  console.log(data);
};

const findinDB = async () => {
  const fistCollectionModel = mongoose.model("firstCollection", dataSchema);
  let data = await fistCollectionModel.find({ name: "arshad" });
  console.log(data);
};

//saveinDB();
//updateinDB();
findinDB();

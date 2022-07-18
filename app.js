const express = require("express");
require("./config");
const aCollection = require("./firstCollection");

const app = express();

app.use(express.json());

app.post("/create", async (req, res, next) => {
  let data = new aCollection(req.body);
  let result = await data.save();
  console.log(req.body);
  console.log(result);
  res.send(result);
});

app.get("/list", async (req, res, next) => {
  let data = await aCollection.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res, next) => {
  console.log(req.params._id);
  let data = await aCollection.deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async (req, res, next) => {
  console.log(req.params._id);
  let data = await aCollection.update(req.params, { $set: req.body });
  res.send(data);
});

app.listen("3000", () => console.log("App is listening on 3000"));

"use strict"

const UserController = require("./controllers/userController");
const express = require("express");
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//routes
app.post("/create", UserController.create);

app.get("/find/:id", UserController.find);

app.put("/update/:id", UserController.update);

app.delete("/delete/:id", UserController.delete);

//server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

"use strict";

const models = require("../models");

// create user  
exports.create = async (req, res) => {
  try {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;

    const user = await models.user.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
    });

    res.send({
      body: {
        user,
      },
      message: "user created",
    });
  } catch (err) {
    console.log(err);
  }
};

//get user by id
exports.find = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await models.user.findOne({
      where: {
        id: id,
      },
    });

    res.send({
      body: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

//update user by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;

    const user = await models.user.update(
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.send({
      message: "user details updated",
      body: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

//delete user by id
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await models.user.destroy({
      where: {
        id: id,
      },
    });

    res.send({
      message: "user deleted successfully.",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};

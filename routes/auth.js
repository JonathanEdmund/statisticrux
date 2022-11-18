"use strict";

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// db
import User from "../models/User.js";

// middleware
import authenticateToken from "../middleware/authenticateToken.js";
import parseCookie from "../middleware/parseCookie.js";

const router = express.Router();

router.route("/register").post(async (req, res) => {
  try {
    const { username, password, firstName, lastName } = req.body;

    if (!(username || password)) {
      throw new Error("Incomplete registration form!");
    }

    const user = await User.findOne({ username: username });
    if (user) throw new Error("Username already taken!");

    // encrypt password with bcrypt
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT)
    );

    const newUser = new User({
      username: username,
      password: hashedPassword,
      firstName,
      lastName,
    });

    await newUser.save();

    // send jwt token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    res.cookie("accessToken", accessToken, { httpOnly: true, maxAge: 900000 }); // 15 minutes

    res.json({
      status: true,
      message: "Successfully registered a new user!",
    });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username || password)) throw new Error("Incomplete login form!");

    const user = await User.findOne({ username: username });

    if (!user) {
      throw new Error("User not found!");
    }

    // add bcrypt verification
    const hash = await user.password;
    const result = await bcrypt.compare(password, hash);
    if (!result) {
      throw new Error("Incorrect password!");
    }

    // send jwt token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    res.cookie("accessToken", accessToken, { httpOnly: true, maxAge: 900000 }); // 15 minutes
    res.json({ status: true, message: "Successfully logged in!", username });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

router
  .route("/:username")
  .get(parseCookie, authenticateToken, async (req, res) => {
    try {
      const { userId } = req.user;
      const { username } = req.params;
      const user = await User.findById(userId);

      if (!user) {
        throw new Error("User not found!");
      }

      if (user.username !== username) {
        throw new Error("Username and id doesn't match");
      }

      res.json({ status: true, message: "User found!", user });
    } catch (error) {
      res.json({ status: false, message: error.message });
    }
  })
  .patch(parseCookie, authenticateToken, async (req, res) => {
    try {
      const { userId } = req.user;
      const { username } = req.params;
      const { firstName, lastName, newUsername, dateOfBirth } = req.body;

      if (username !== newUsername) {
        const duplicateUser = await User.findOne({ username: newUsername });
        if (duplicateUser)
          throw new Error("New username has already been taken!");
      }

      const user = await User.findByIdAndUpdate(userId, {
        $set: { firstName, lastName, username: newUsername, dateOfBirth },
      });
      if (!user) {
        throw new Error("User not found!");
      }

      res.json({status: true, message: "Successfully updated the user!", user});
    } catch (error) {
      res.json({ status: false, message: error.message });
    }
  });

export default router;

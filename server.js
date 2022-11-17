"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import connection from "./utils/db.js";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// import validate_token from "./routes/validate_token.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

// app.use("/api/validate_token", validate_token);
app.use("/api/auth", authRoutes);

connection.once("open", () => console.log("Connected to database"));
connection.once("error", () => console.log("Error connecting to database"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3001, function () {
  console.log("Server started at port 3001");
});

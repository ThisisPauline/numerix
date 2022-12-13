require("dotenv").config();

const express = require("express");

const app = express();

const BACKEND_PORT = process.env.BACKEND_PORT ?? 5005;

const database = require("./database");

app.get("/", (req, res) => {
  let output = "";
  let error = false;

  database
    .getConnection()
    .then(() => {
      output += "Database connection working well.";
    })
    .catch((err) => {
      error = true;
      console.error(err);
      output += "Database connection malfunctioning.";
    })
    .finally(() => {
      if (error) {
        res.status(500).send(output);
      } else {
        res.status(200).send("Welcome to our API!" + output);
      }
    });
});

const numberRouter = require("../numbers/numberRouter");
app.use("/numbers", numberRouter);

app.listen(BACKEND_PORT, () => {
  console.log("Listening on port", BACKEND_PORT);
});

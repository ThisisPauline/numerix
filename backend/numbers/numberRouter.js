const express = require("express");
const numberRouter = express.Router();

const numberHandlers = require("./numberHandlers");

numberRouter.get("/", numberHandlers.getAllNumbers);

module.exports = numberRouter;

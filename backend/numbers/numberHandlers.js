const database = require("../src/database");

const getAllNumbers = (req, res) => {
  database
    .query("SELECT * FROM numbers")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  getAllNumbers,
};

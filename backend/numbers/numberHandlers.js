const database = require("../src/database");

const getAllNumbers = (req, res) => {
  database
    .query("SELECT * FROM numbers ORDER BY chosenNumber ASC")
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

const createNumber = (req, res) => {
  const { chosenNumber } = req.body;
  database
    .query("INSERT INTO numbers (chosenNumber) VALUES (?)", [chosenNumber])
    .then((result) => {
      if (result[0].affectedRows === 0) {
        res.status(400).send("Number could not be created.");
      } else {
        const newNumberID = result[0].insertId;
        res.location(result[0].insertId).sendStatus(201);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  getAllNumbers,
  createNumber,
};

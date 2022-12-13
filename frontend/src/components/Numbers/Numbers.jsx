import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./numbers.css";

const Numbers = () => {
  const [existingNumber, setExistingNumber] = useState([]);
  const [chosenNumber, setChosenNumber] = useState([]);

  const backendURL = "http://localhost:5005";

  useEffect(() => {
    axios
      .get(`${backendURL}/numbers`)
      .then((response) => response.data)
      .then((data) => setExistingNumber(data)),
      [existingNumber];
  });

  console.log(existingNumber);
  if (existingNumber === undefined) return <p>Loading...</p>;
  if (chosenNumber === undefined) return <p>Loading...</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5005/numbers", {
        chosenNumber,
      })
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div>
        <h1 className="past-number">{chosenNumber}</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="Number">Introduce your number:</label>
        <input
          type="number"
          id="chosenNumber"
          value={chosenNumber}
          onChange={(e) => {
            setChosenNumber(e.target.value);
          }}
        />
        <button className="button-submit" type="submit">
          Submit your number
        </button>
      </form>
      <div>
        <h2 className="past-number">
          Here are all the numbers present in the database
        </h2>
        <div className="old-numbers">
          {existingNumber.map((number) => (
            <p>{number.chosenNumber}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Numbers;

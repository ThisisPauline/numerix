import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "./numbers.css";

const Numbers = () => {
  const [existingNumber, setExistingNumber] = useState([]);
  const [newNumber, setNewNumber] = useState([]);

  const backendURL = "http://localhost:5005";

  useEffect(() => {
    axios
      .get(`${backendURL}/numbers`)
      .then((response) => response.data)
      .then((data) => setExistingNumber(data));
  }, []);

  console.log(existingNumber);
  if (existingNumber === undefined) return <p>Loading...</p>;

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
        {existingNumber.length != 0 ? (
          <h1>{existingNumber[0].chosenNumber}</h1>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Number">Introduce your number:</label>
        <input
          type="text"
          id="number"
          value={newNumber}
          onChange={(e) => setNewNumber(e.target.value)}
        />
        <button className="button-submit" type="submit">
          Submit your number
        </button>
      </form>
    </div>
  );
};
export default Numbers;

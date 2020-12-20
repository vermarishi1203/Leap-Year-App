import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [yearType, setYearType] = useState("");
  function onClickHandler() {
    var inputYear = document.querySelector(".input").value;
    if (inputYear === "") {
      setYearType("Please enter a year.");
    } else {
      if (inputYear % 100 === 0) {
        if (inputYear % 400 === 0) {
          setYearType("This is a Leap Year.");
        } else {
          setYearType("This is not a Leap Year.");
        }
      } else if (inputYear % 4 === 0) {
        setYearType("This is a Leap Year.");
      } else {
        setYearType("This is not a Leap Year.");
      }
    }
  }
  return (
    <div className="App">
      <h1 className="heading"> Is it a Leap Year?</h1>
      <input className="input" placeholder="Enter a year"></input>
      <button className="btn" onClick={() => onClickHandler()}>
        Check
      </button>
      <output className="output">{yearType}</output>
      <p className="credit">
        Made by <a href="https://rishiverma.netlify.app/">Rishi Verma</a>.
      </p>
    </div>
  );
}

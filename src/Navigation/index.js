import React from "react";
import "./Navigation.css";

function Navigation(props) {
  return (

    <div>
      <div className="navbar">
      <div className="label">
          <img src="./images/logo.png" id="logosize">
          </img>
        </div>
        <div className="label">
          <h2>JD's "Batman '66" click game!</h2>
        </div>
        <div className="label">
  <h2>Your score:  {props.score}</h2>
        </div>
        <div className="label">
          <h2>Top score:  {props.topScore} </h2>
        </div>
        <div className="babel">
          <h2><center>Click all 12 characters without repeating yourself!</center></h2>
        </div>

      </div>
    </div>
  );
}

export default Navigation;
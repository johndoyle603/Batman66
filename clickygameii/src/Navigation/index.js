import React from "react";
import "./Navigation.css";

function Navigation(props) {
  return (

    <div>
      <div className="row navbar fixed-top">
      <div className="col-md-3 label">
          <img src="/images/logo.png" id="logosize">
          </img>
        </div>
         <div className="col-md-3 label">
          <h2>Batman click game</h2>
        </div>
        <div className="col-md-3 label">
  <h2>Current score:{props.score}</h2>
        </div>
        <div className="col-md-3 label">
          <h2>Top score:{props.topScore} </h2>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
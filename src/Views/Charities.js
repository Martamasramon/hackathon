import '../App.css';
import React from "react";

function Charities() {
  return (
    <div className="Charities">

  <div class="container">
      <div class="image">
        <img className="char-img" src={process.env.PUBLIC_URL + "/images/heartfoundation.png"} alt="logo"></img>
      </div>
      <div class="text">
        <h3>British Heart Fundation</h3>
        <p>British Heart Fundation is funds research related to heart and circulatory diseases.</p>
      </div>
    </div>
    

    <div class="row">
      <div class="column">
        <img className="char-img" src={process.env.PUBLIC_URL + "/mcmillan.png"} alt="logo"></img>
      </div>

      <div class="column">
        <h2>Macmillan Cancer Support</h2>
        <p>Macmillan Cancer Support is one of the largest british charities. It provides healthcare, information and financial support to people affected by cancer.</p>
      </div>
    </div>


    </div>
  );
}

export default Charities;

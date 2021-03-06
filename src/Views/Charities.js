import '../App.css';
import React from "react";

function Charities() {
  return (
    <div className="Charities">

    <div className="charity">
    <h2>British Heart Fundation</h2>
    <img className="char-img" src={process.env.PUBLIC_URL + "/images/heartfoundation.png"} alt="logo"></img>
    <p>British Heart Fundation is funds research related to heart and circulatory diseases.</p>
    </div>

    <div className="charity">
    <h2>Macmillan Cancer support</h2>
    <img className="char-img" src={process.env.PUBLIC_URL + "/images/mcmillan.png"} alt="logo"></img>
    <p>Macmillan cancer support is one of the largest british charities. It provides healthcare, information and financial support to people affected by cancer.</p>
    </div>


    </div>
  );
}

export default Charities;

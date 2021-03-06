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
    
    <div class="container">
    <div class="image">
    <img className="char-img" src={process.env.PUBLIC_URL + "/images/mcmillan.png"} alt="logo"></img>
      </div>
      <div class="text">
        <h3>Macmillan Cancer Support</h3>
        <p>Macmillan Cancer Support is one of the largest british charities. It provides healthcare, information and financial support to people affected by cancer..</p>
      </div>
    </div>
    
     <div class="container">
    <div class="image">
    <img className="char-img" src={process.env.PUBLIC_URL + "/images/StJohn.png"} alt="logo"></img>
      </div>
      <div class="text">
        <h3>St. John Ambulance</h3>
        <p>St John Ambulance is a volunteer-led, charitable non-governmental organisation dedicated to the teaching and practice of first aid in England.</p>
      </div>
    </div>
    
     <div class="container">
    <div class="image">
    <img className="char-img" src={process.env.PUBLIC_URL + "/images/Keep.png"} alt="logo"></img>
      </div>
      <div class="text">
        <h3>Keep Britain Tidy</h3>
        <p>Keep Britain Tidy is a UK-based independent environmental charity. The organisation campaigns to reduce litter, improve local places and prevent waste. It has offices in Wigan and London.</p>
      </div>
    </div>
    




    </div>
  );
}

export default Charities;

import '../App.css';
import React from "react";

function Charities() {
  return (
    <div className="Charities">

      <div className="home center">
        <h1>Charities</h1>
        <p>Here are some of the charities that we work with. All are well known non-profit organisations that fight for causes that are important to us.</p>
      <img src={process.env.PUBLIC_URL + "/images/5trees.png"} alt="Little Forest"></img>
      </div>

      <div className="home">

        <div class="container">
          <div class="image">
            <img className="char-img" src={process.env.PUBLIC_URL + "/images/heartfoundation.png"} alt="logo"></img>
          </div>

          <div class="text">
            <h3>British Heart Fundation</h3>
            <p>
            <a href="https://www.bhf.org.uk">British Heart Fundation</a>funds research related to heart and circulatory diseases and their risk factors.</p>
          </div>
        </div>

        <div class="container">
          <div class="image">
            <img className="char-img" src={process.env.PUBLIC_URL + "/images/mcmillan.png"} alt="logo"></img>
          </div>

          <div class="text">
            <h3>Macmillan Cancer Support</h3>
            <p><a href="https://www.macmillan.org.uk">Macmillan Cancer Support</a>is one of the largest british charities. It provides healthcare, information and financial support to people affected by cancer.</p>
          </div>
        </div>

       <div class="container">
        <div class="image">
          <img className="char-img" src={process.env.PUBLIC_URL + "/images/StJohn.png"} alt="logo"></img>
        </div>

        <div class="text">
          <h3>St. John Ambulance</h3>
          <p><a href="https://www.sja.org.uk">St John Ambulance</a>is one of the largest british charities. It provides healthcare, information and financial support to people affected by cancer.</p>
       </div>
      </div>

       <div class="container">
        <div class="image">
          <img className="char-img" src={process.env.PUBLIC_URL + "/images/Keep.png"} alt="logo"></img>
        </div>

        <div class="text">
          <h3>Keep Britain Tidy</h3>
          <p><a href="https://www.keepbritaintidy.org">Keep Britain Tidy</a>is a UK-based independent environmental charity. The organisation campaigns to reduce litter, improve local places and prevent waste. It has offices in Wigan and London.</p>
        </div>
      </div>
    </div>
    
    <div class="container">
        <div class="image">
          <img className="char-img" src={process.env.PUBLIC_URL + "/images/Children.png"} alt="logo"></img>
        </div>
    
    <div class="text">
          <h3>Children in Need</h3>
          <p><a href="https://www.bbcchildreninneed.co.uk">BBC Children in Need</a>is the BBC's UK charity for disadvantaged children and young people in the UK.</p>
        </div>
      </div>
    </div>
    
    <div class="container">
        <div class="image">
          <img className="char-img" src={process.env.PUBLIC_URL + "/WWF.png"} alt="logo"></img>
        </div>
    
    <div class="text">
          <h3>WWF</h3>
          <p><a href="https://www.wwf.org.uk">WWF</a>is an international non-governmental organisation that aims to reduce the human impact on environment.</p>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Charities;

import '../App.css';
import React from "react";

function WhoAreWe() {
  return (
    <div className="center">
      <div className="whoarewe">
        <h1>Who Are We?</h1>
        <img className="us-img" src={process.env.PUBLIC_URL + "/images/US.png"} alt="5 happy girls"></img>
        <p>From left to right: Marta Masramon Munoz, Mireia Munoz Rojo, Livia Soro, Manuela Giraud, Yacout Rtel Bennani</p>
      </div>

      <div className="whoarewe green">
         <img src={process.env.PUBLIC_URL + "/images/tree_sm.png"} alt="logo"></img>
         <h4>We are five bioengineering students from Imperial College. We decided to create Seedling because we wanted to make recycling easier for everyone.</h4>
         <h4>We created Seedling during a 24h Hackathon hosted by WSET!</h4>
      </div>
    </div>


  );
}

export default WhoAreWe;

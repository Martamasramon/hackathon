import '../App.css';
import React from "react";

function WhoAreWe() {
  return (
    <div className="whoarewe center">
      <h1>Who Are We?</h1>
       <img className="us-img" src={process.env.PUBLIC_URL + "/images/US.png"} alt="5 happy girls"></img>
       <p>From left to right: Marta Masramon Munoz, Mireia Munoz Rojo, Livia Soro, Manuela Giraud, Yacout Rtel Bennani</p>
      <p>We are five bioengineering students from Imperial College. We decided to create Seedling because we wanted to make recycling easier for everyone.</p>
      <p>We created Seedling during a 24h Hackathon hosted by the Women in Sciences and Technology Society.</p>
    </div>


  );
}

export default WhoAreWe;

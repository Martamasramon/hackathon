import '../App.css';
import React from "react";

function Help() {
  return (
    <div>
      <div className="Home center">
        <h1>How to recycle</h1>
        <p>Recycling can look intimidating there are different rules for every package. We are here to help you getting it right!</p>
        <img src={process.env.PUBLIC_URL + "/images/5trees.png"} alt="Little Forest"></img>
     

      <div className="home white">
        <p>First, you need to understand the recycling symbols! It is essential to know them to recycle efficiently.</p>
        <img src={process.env.PUBLIC_URL + "/images/Recycling.png"} alt="Little Forest"></img>
      </div>
     </div>
    

    </div>

  );
}

export default Help;

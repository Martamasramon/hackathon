import '../App.css';
import React from "react";

function Help() {
  return (
    <div className="help">
      <h1>How to recycle</h1>
      <p>Recycling can look intimidating there are different rules for every package. We are here to help you getting it right!</p>
      <img src={process.env.PUBLIC_URL + "/images/5trees.png"} alt="Little Forest"></img>
      <p>First, you need to know what are the different recycling symbols. It is essential to read them properly so you can do your recycling correctly.</p>
     <img src={process.env.PUBLIC_URL + "/images/Recycling.png"} alt="Recycling Symbols"></img>
    </div>
  );
}

export default Help;

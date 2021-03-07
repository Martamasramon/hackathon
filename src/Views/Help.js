import '../App.css';
import React from "react";

function Help() {
  return (
    <div>
      <div className="home center">
        <h1>How to recycle</h1>
        <p>Recycling can look intimidating there are different rules for every package. We are here to help you getting it right!</p>
        <img src={process.env.PUBLIC_URL + "/images/5trees.png"} alt="Little Forest"></img>
     

      <div className="home white">
        <p>First, you need to understand the recycling labels! It is essential to know them to recycle efficiently.</p>
        <img src={process.env.PUBLIC_URL + "/images/Recycling.png"} alt="Little Forest"></img>
        <p>Once you understand them, it is important to know what are your borough can recycle. Depending on your local area, you might be able to recycle some products that some other area cannot.</p>
      </div>
    
    <h1>Materials</h1>
     <p>Here is a list of the materials that can be recycled: </p>
     <p>Plastics</p>
     <ul>
     <li>Cling wrap</li>
     <li>Margarine tubes</li>
     <li>Plastic trays</li>
    <li>Plastic pouches</li>
     <li>Drink bottles</li>
     <li>Toiletries and shampoo bottles</li>
     </ul>
    
    
     </div>
  
    </div>

  );
}

export default Help;

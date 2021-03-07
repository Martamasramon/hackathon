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

        <div className="items">

          <h1>Materials</h1>
           <p>Here is a list of the materials that can be recycled: </p>
    
           <h4><b>Plastics</b></h4>
           <p>Plastics are widely recycled in London, here are a few examples of plastics item that can be recycled:</p>
           <p>Cling wrap</p>
           <p>Margarine tubes</p>
           <p>Plastic trays</p>
           <p>Plastic pouches</p>
           <p>Drink bottles</p>
           <p>Toiletries and shampoo bottles</p>
           <p></p>
    
           <h4><b>Organic Waste</b></h4>
           <p>Organic waste can be transformed into compost. Depending on your borough, you might be able to recycle it! If not, you can <a href="https://learn.eartheasy.com/guides/composting/">do it yourself!</a>It is a very easy process!</p>
           <p></p>
    
           <h4><b>Paper</b></h4>
           <p>Paper is widely recycled in London. You can recycle:</p>
           <p>Magasins</p>
           <p>Cardboard</p>
           <p>Newspapers</p>
           <p>Old photocopies</p>
           <p>Don not forget to remove any staples and paper clips before recycling papers!</p>
           <p></p>
    
           <h4><b>Electronic Equipment</b></h4>
           <p>Computers, phones, old batteries, (etc.) can be recycled. They need to go into specialised bins.</p>
           <p></p>
  
           <h4><b>Textile</b></h4>
           <p>Clothes and other textiles can be recycled easily. You can also donate the clothes that are just taking place in your closet!</p>


           </div>
       </div>

    </div>

  );
}

export default Help;

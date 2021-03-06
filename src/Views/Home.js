import '../App.css';
import React from "react";

function Home() {
  return (
    <div>
      <div className="home center">
        <h1>Make an impact by recycling!</h1>
        <h2>You recycle. We donate.</h2>
        <img src={process.env.PUBLIC_URL + "/images/BusinessModel.png"} alt="Business Model"></img>
        <h2>How does it work?</h2>
        <img src={process.env.PUBLIC_URL + "/images/Image1.png"} alt="Download our app"></img>
        <img src={process.env.PUBLIC_URL + "/images/Image2.png"} alt="Scan"></img>
        <img src={process.env.PUBLIC_URL + "/images/Image3.png"} alt="Recycle"></img>
        <img src={process.env.PUBLIC_URL + "/images/Image4.png"} alt="We donate"></img>

        <h2>Download now!</h2>
        <img className="dwn-img1" src={process.env.PUBLIC_URL + "/images/appstore.png"} alt="logo"></img>
        <img className="dwn-img2" src={process.env.PUBLIC_URL + "/images/googleplay.png"} alt="logo"></img>
      </div>


      <div className="home yellow">
        <h2>How does it work?</h2>
        <p>Scan the products you want to recycle on our app! Once you have scanned 100 items, we will donate £2 to the charity of your choice!</p>

      </div>
    </div>
  );
}

export default Home;

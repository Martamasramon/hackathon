import '../App.css';
import React from "react";

function Home() {
  return (
    <div>
      <div className="home">

        <h1>Make an impact by recycling!</h1>
        <h2>You recycle. We donate.</h2>
        <img src="Screenshot_2021-03-06_at_16.08.49-removebg-preview.png" alt="Little Forest">

      </div>


      <div className="home yellow">
        <h2>How does it work?</h2>
        <p>Scan the products you want to recycle on our app! Once you have scanned 100 items,and we will donate £2 to the charity of your choice!</p>

      </div>
    </div>
  );
}

export default Home;

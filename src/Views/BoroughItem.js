import '../App.css';
import React from "react";

function BoroughItem(props) {
  const borough = props.borough;

  return (
    <div className="help">
      <h1>{borough}</h1>
    </div>
  );
}

export default BoroughItem;

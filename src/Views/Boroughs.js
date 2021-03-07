import '../App.css';
import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import BoroughItem from './BoroughItem';

const Boroughs = () => {

  const [display, setDisplay] = useState({
    lastBorough: "",
    chelsea: false,
    fulham: false,
    camden: false,
    islington: false
  });

  const show = (e) => {
    const name = e.target.getAttribute('value');

    setDisplay({
      ...display,
      [display.lastBorough]: false,
      [name]: true,
      lastBorough: name
    });
}


  return (
    <div className="boroughs center">
        <h1>Recycle in your borough</h1>

        <Dropdown>
          <Dropdown.Toggle className="btn-secondary">
            Choose your borough
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#" value="chelsea" onClick={e => {show(e)}}>Chelsea</Dropdown.Item>
            <Dropdown.Item href="#" value="fulham" onClick={e => {show(e)}}>Fulham</Dropdown.Item>
            <Dropdown.Item href="#" value="camden" onClick={e => {show(e)}}>Camden</Dropdown.Item>
            <Dropdown.Item href="#" value="islington" onClick={e => {show(e)}}>Islington</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <img src={process.env.PUBLIC_URL + "/images/5trees.png"} alt="Little Forest"></img>


        {display.chelsea && <BoroughItem borough="chelsea"/>}
        {display.fulham && <BoroughItem borough="fulham"/>}
        {display.camden && <BoroughItem borough="camden"/>}
        {display.islington && <BoroughItem borough="islington"/>}

  </div>
  );
}


export default Boroughs;

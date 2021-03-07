import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import React from "react";

function NavigationBar() {
  return (
    <div className="topnav">
      <Navbar expand="lg">
        <Navbar.Brand className="logo" href="#home">
          <img className="logo-img" src={process.env.PUBLIC_URL + "/images/logoooo.png"} alt="logo"></img>Seedling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">How to recycle</Nav.Link>
            <Nav.Link href="/boroughs">Your borough</Nav.Link>
            <Nav.Link href="/charities">Charities</Nav.Link>
            <Nav.Link href="/contact">Who are we?</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Navbar>

      <hr align="right"/>
    </div>
  );
}

export default NavigationBar;

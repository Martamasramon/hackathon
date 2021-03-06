import '../App.css';
import {Navbar, Nav} from 'react-bootstrap';
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <hr align="right"/>

      <Navbar expand="lg">
        <Navbar.Brand className="logo" href="#home">Seedling</Navbar.Brand>
        <Navbar.Collapse >
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/help">How to recycle</Nav.Link>
            <Nav.Link href="/boroughs">Your borough</Nav.Link>
            <Nav.Link href="/charities">Charities</Nav.Link>
            <Nav.Link href="/contact">Who are we?</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Footer;

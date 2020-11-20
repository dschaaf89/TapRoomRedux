import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Header () {
  return(
  <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
     The Tap-Room
    </ReactBootStrap.Navbar.Brand>
  </ReactBootStrap.Navbar>
  );
}



export default Header
import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Header () {
  return(
  <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand href="#home">
    {' '}
     The Tap-Room
    </ReactBootStrap.Navbar.Brand>
  </ReactBootStrap.Navbar>
  );
}



export default Header
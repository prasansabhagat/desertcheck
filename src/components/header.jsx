import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
function Header(){
  let history = useHistory();

    return <Navbar>
  <Container>
    <Navbar.Brand href="#home" className="textstyle">Dessert Check</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Button className="navBar"
      onClick={() => {
        history.push("/carousel");
      }}> Home</Button>
      <Button className="navBar" 
      onClick={() => {
        history.push("/signup");
      }}> Sign Up</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default Header;
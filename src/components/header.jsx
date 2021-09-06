import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
function Header(){
    return <Navbar>
  <Container>
    <Navbar.Brand href="#home">Desert Check</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Button className="navBar" const path = "/signup">Home</Button>
      <Button className="navBar">Sign Up</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default Header;
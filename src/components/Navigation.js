import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
  return(
    <Navbar expand="xl" variant="dark" bg="dark">
      <Navbar.Brand href="#">BREACH</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="mr-auto">
        <Nav.Link href="#demo">Demo</Nav.Link>
        <Nav.Link href="#team">The Team</Nav.Link>
        <Nav.Link href="#gdd">GDD</Nav.Link>
      </Nav>
    </Navbar>
    )
}

export default Navigation

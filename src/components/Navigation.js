import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Switch, Route, Link } from 'react-router-dom';
import Demo from './Demo';
import Home from './Home';
import Team from './Team';
import Gdd from './Gdd'

const Navigation = () => {
  return(
    <div>
      <div>
        <Navbar expand="xl" variant="dark" bg="dark">
          <Navbar.Brand as={Link} to="/">BREACH</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/demo">Demo</Nav.Link>
            <Nav.Link as={Link} to="/team">The Team</Nav.Link>
            <Nav.Link as={Link} to="/gdd">GDD</Nav.Link>
          </Nav>
        </Navbar>
        </div>
        <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/demo' component={Demo} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/gdd' component={Gdd} />
        </Switch>
        </div>
      </div>
    )
}

export default Navigation

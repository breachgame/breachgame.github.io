import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Switch, Route, Link } from 'react-router-dom';
import Demo from './Demo';
import Home from './Home';
import Team from './Team';
import Gdd from './Gdd'
import '../css/navbar.css'

const Navigation = () => {
  return(
    <div>
      <div>
        <Navbar variant="dark" className="custom-nav">
          <div className="container">
            <Navbar.Brand as={Link} to="/" className="custom-brand" style={{fontSize:"2rem"}}>BREACH</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-link"/>
              <Nav className="mr-auto">
              <Nav.Link as={Link} to="/demo">DEMO</Nav.Link>
              <Nav.Link as={Link} to="/team">TEAM</Nav.Link>
              <Nav.Link as={Link} to="/gdd">GDD</Nav.Link>
            </Nav>
          </div>
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

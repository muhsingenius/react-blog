import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import { Navbar, Nav, Form, Button} from 'react-bootstrap';


export default class NavBar extends Component{
  render(){
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">Genius Teck Blog</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link><Link to="/">All Posts</Link></Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="outline-success"><Link to="/signup">Sign Up</Link></Button>
            <Button variant="outline-success"><Link to="/login">Login</Link></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  
}

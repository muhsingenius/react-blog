import React, { Component } from 'react'
import { Navbar, Nav, Form, Button} from 'react-bootstrap';


export default class NavBar extends Component{
  render(){
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Genius Teck Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Button href="#link">Add New Post</Button>
          </Nav>
          <Form inline>
            <Button variant="outline-success">Sign Up</Button>
            <Button variant="outline-success">Login</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  
}

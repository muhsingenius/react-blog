import React, {Component} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {Link } from 'react-router-dom'


const formStyle = {
  width: '50%',
  margin: '0 auto',
};

export default class UserSignup extends Component{
  
  render(){
    return(
      <div className="container">
          <Form style={formStyle}>
          <h3>User Sign Up</h3>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalConfirmPassword">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="confirm_password" placeholder="Confirm Password" />
            </Col>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>Already have an Account? <Link to="/login">Login</Link></p>

        </Form>
      </div>
    )
  }
}

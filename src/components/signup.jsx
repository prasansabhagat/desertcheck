import React, { Component } from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';

export class Sign extends Component {
    render() {
        return (
          <div>
            <Form>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>
  
  <Form.Group className="mb-3">
    <Form.Label>Birth Date</Form.Label>
    <Form.Control type="date" placeholder="09-10-1996" />
  </Form.Group>
  
  <Form.Group className="mb-3"  >
    <Form.Label>Gender</Form.Label>
    <Form.Control type="text" placeholder="F/M" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address </Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control type="text" placeholder="Enter state" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3"  >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group className="mb-3"  >
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" placeholder="123-456-789" />
  </Form.Group>
  
  <Form.Text className="text-muted">
      We'll never share your information with anyone else.
    </Form.Text><br />
    
  <Button type="submit">
    Submit
  </Button>
</Form>
          </div>
    )
  }
}

export default Sign;
import React from 'react';
import {Card, Form, Row, Col, Button, Container} from 'react-bootstrap'

const Account = () => {
  return (
    <Container className="mt-5">
      <Card className="m-5 p-5">
      {/* TITLE */}
      <div className="d-flex justify-content-center">
      <h2 className="m-auto">Personal data</h2>
      </div>

      {/* EMAIL */}
    <Form className="mt-5">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" 
            defaultValue="cake@gmail.com"/>
        </Col>
      </Form.Group>

      {/* PASSWORD */}
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" 
            defaultValue="thebestcake"/>
        </Col>
      </Form.Group>
      
      {/* BUTTON SAVE CHANGE */}
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button variant={"outline-dark"} type="submit">Save change</Button>
        </Col>
      </Form.Group>
    </Form>

    </Card>
    </Container>
  );
}

export default Account;

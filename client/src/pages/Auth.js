import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import {NavLink, useLocation} from "react-router-dom";

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(location)

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}>
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Sign in to the site" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter your email..."
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password..."
          />
        </Form>

        <Button 
            variant={"outline-success"}
            className="mt-3">
          {isLogin ? "Sign in" : "Log up"}
        </Button>

        {isLogin ? 
         <div className="mt-3">Don't have an account yet? 
         <NavLink to={REGISTRATION_ROUTE}> Create an account.</NavLink>
        </div>
        :
        <div className="mt-3">Already have an account? 
        <NavLink to={LOGIN_ROUTE}> Sign in</NavLink>
       </div>}
      </Card>
  
    </Container>
  );
}

export default Auth;

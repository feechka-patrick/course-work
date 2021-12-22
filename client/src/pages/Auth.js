import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation, useHistory} from "react-router-dom";
import { login, registration } from '../http/userAPI';
import {Context} from "../index";

const Auth = () => {
  const { user } = useContext(Context)
  const location = useLocation()
  const history = useHistory()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      console.log(data)

      user.setUser(user)
      user.setIsAuth(true)
      history.push(MAIN_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

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
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="Enter your password..."
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form>

        <Button
          variant={"outline-success"}
          className="mt-3"
          onClick={signIn}>
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

import React, { useContext } from 'react';
import { Button, ButtonGroup, Card, Col, Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Context } from '..';
import TypeBar from '../components/TypeBar';
import { GAME_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import {useHistory} from 'react-router-dom'


const Main = () => {
  const {user} = useContext(Context);
  const history = useHistory();

  return (
    <Container>
      <Row className="mt-5">

        <Col md={3} >
          <TypeBar />
        </Col>

        <Col md={9}>
          <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="../image/100px180.jpg" /> */}
            <Card.Body >
              <Card.Title>Крестики - нолики</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <ButtonGroup className="d-flex justify-content-center" >
              {user.isAuth ? 
                        <Button variant={"outline-dark"} onClick={() => history.push(GAME_ROUTE)}>PLay</Button>
                        :
                        <Button variant={"outline-dark"} onClick={() => history.push(REGISTRATION_ROUTE)}>PLay</Button>
                    }  
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>

      </Row>


    </Container>
  );
}

export default Main;

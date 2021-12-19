import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import { Card } from 'react-bootstrap';
import {observer} from "mobx-react-lite";

const TypeBar = observer( () => {
    return (
        <Card>
        <ListGroup>
            <ListGroup.Item action>Logical games</ListGroup.Item>
            <ListGroup.Item disabled>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item disabled>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item disabled>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item disabled>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item disabled>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item disabled>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item disabled>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item disabled>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item disabled>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item disabled>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        </Card>
    );
})

export default TypeBar;

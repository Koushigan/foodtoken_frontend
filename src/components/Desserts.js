import axios from "axios";
import Popup from 'reactjs-popup';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navigate } from "react-router-dom";

function Desserts(props) {
    const [desserts, setDesserts] = useState([]);

    const foodtoken = () => {
        alert("Your Food has been added to the cart");
    };

    const getPosts = async () => {
        try {
            let response = await fetch("http://localhost:3002/desserts/");
            response = await response.json();
            setDesserts(response);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <>
            <Container>
                <Row>
                    {desserts.map((p) => (
                        <Col md={2} key={p.id}>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={p.image} />
                                <br></br>
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text>{p.description}</Card.Text>
                                    <Button onClick={foodtoken} variant="primary">
                                        Add to cart
                                    </Button>{" "}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Desserts;

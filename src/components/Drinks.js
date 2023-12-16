import Popup from 'reactjs-popup';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Drinks(props) {
    const [drinks, setDrinks] = useState([]);

    const foodToken = () => {
        alert("Your Food has been added to the cart");
    };

    const getPosts = async () => {
        try {
            let response = await fetch("");
            response = await response.json();
            setDrinks(response);
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
                    {drinks.map((p) => (
                        <Col md={2} key={p.id}>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src={p.image} />
                                <br></br>
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <Card.Text>{p.description}</Card.Text>
                                    <Button onClick={foodToken} variant="primary">
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

export default Drinks;

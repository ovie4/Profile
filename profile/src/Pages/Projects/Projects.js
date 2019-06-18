import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';


const Projects=props=>(
    <Container className="container" style={props.style}>
        <Row>
            <Col>
                <strong><i><u>Projects</u></i></strong>
                <br />
                <a href='https://github.com/ovie4' target="_blank" rel="noopener noreferrer">My Github</a>
            </Col>
        </Row>
        <Row>
            <Col>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="./assets/images/Gathering2.jpg" />
                        <Card.Body>
                        <Card.Title>21Delmont.com</Card.Title>
                        <Card.Text>
                            Full stack property management site for mostly dealing with work orders and streamlining property management,maintenance and tenant interaction.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="http://www.21delmont.com">Visit Site</a>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./assets/images/vinoFinder.png" />
                        <Card.Body>
                        <Card.Title>Vino Finder</Card.Title>
                        <Card.Text>
                            Fun experiment using Bootstrap and Node.js to implement a "best wine" survey 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <a href="https://blooming-dawn-99139.herokuapp.com/">Visit Site</a>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Col>
        </Row>
    </Container>
);

export default Projects
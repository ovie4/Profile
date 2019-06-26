import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import "./Projects.css";



const Projects=props=>(
    <Container className="container">
        <Row>
            <Col>
                <h3><i>Projects</i></h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <CardDeck>
                    <Card className="bg-dark text-white">
                        <Card.Img src="./assets/images/Gathering2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>
                                <a href="http://www.21delmont.com" target='_blank' rel="noopener noreferrer">21 Delmont</a>
                            </Card.Title>
                            <Card.Text>
                                Property management site, streamlining property management,maintenance and tenant interaction.
                            </Card.Text>
                            
                        </Card.ImgOverlay>
                        
                        
                    </Card>
                    <Card className="bg-dark text-white">
                        <Card.Img src="./assets/images/vinoFinder.png" alt="Vino Finder" />
                        <Card.ImgOverlay>
                            <Card.Title>
                                <a href="https://blooming-dawn-99139.herokuapp.com/" target='_blank' rel="noopener noreferrer">Vino Finder</a>
                            </Card.Title>
                            <Card.Text>
                                Fun experiment using Bootstrap and Node.js to implement a "best wine" survey
                            </Card.Text>
                        </Card.ImgOverlay>
                        
                    </Card>

                    
                </CardDeck>
            </Col>
        </Row>
        <Row>
            <Col>
                <a href='https://github.com/ovie4' className='btn btn-primary' target="_blank" rel="noopener noreferrer">My Github</a>
            </Col>
        </Row>
    </Container>
);

export default Projects
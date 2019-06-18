import React, { Component } from "react";
import "./Cover.css";
import Container from 'react-bootstrap/Container';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';








const Cover=props=>(
            <div className='cover'>
                <div className="overlay">
                    <Container>
                            <Card className="card bg-dark text-white" style={{ width: '9rem', top:'20%', display:'inline-block' }}>
                                <Card.Img src="./assets/images/stock1.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Profile</Card.Title>
                                    <Card.Text style={{fontSize:'.5em'}}>
                                        A brief overview of Ovie
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            <Card className="card bg-dark text-dark" style={{ width: '9rem', top:'20%', display:'inline-block' }}>
                                <Card.Img src="./assets/images/stock2.jpg" alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Skills</Card.Title>
                                    <Card.Text style={{fontSize:'.5em'}}>
                                        Check out what I can do!
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>

                                <Button variant="primary" size="lg" className="downButton justify-content-right" onClick={props.handleButton}>
                                    <span>&#8623;</span>
                                </Button>
                    </Container>
                </div>
            
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./assets/images/arsenal5.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='./assets/images/nigeria.jpg'
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="./assets/images/london.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    


export default Cover;
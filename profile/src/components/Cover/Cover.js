import React from "react";
import "./Cover.css";
import Container from 'react-bootstrap/Container';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";


const Cover = props=>(
    <div>
        <div className="overlay">
            <Container>
                <CardDeck>
                    <Card style={{ width: '18rem' }} className="bg-dark text-white">
                        <Card.Img src="./assets/images/stock1.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Profile</Card.Title>
                            <Card.Text>
                                A brief overview of Ovie
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card style={{ width: '18rem' }} className="bg-dark text-dark">
                        <Card.Img src="./assets/images/stock2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Skills</Card.Title>
                            <Card.Text>
                                Check out what I can do!
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./assets/images/auba.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Aubameyang</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='./assets/images/arsenal.jpg'
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Arsenal</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./assets/images/gressel.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Gressel</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

export default Cover;
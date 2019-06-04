import React from "react";
import "./Cover.css";
import Container from 'react-bootstrap/Container';
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";


const Cover = props=>(
    <div>
        <div className="overlay">
            <Container>
                    <Card className="card bg-dark text-white" style={{ width: '18rem', display:'inline-block' }}>
                        <Card.Img src="./assets/images/stock1.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Profile</Card.Title>
                            <Card.Text>
                                A brief overview of Ovie
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="card bg-dark text-dark" style={{ width: '18rem', display:'inline-block' }}>
                        <Card.Img src="./assets/images/stock2.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Skills</Card.Title>
                            <Card.Text>
                                Check out what I can do!
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
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
                <h3>Aubameyang</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src='./assets/images/nigeria.jpg'
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Arsenal</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./assets/images/london.jpg"
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
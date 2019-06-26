import React from "react";
import "./Cover.css";
import Container from 'react-bootstrap/Container';
import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";





const Cover=props=>(
            <div className='cover'>
                <div className="overlay">
                    <Container>
                            {/* <Card className="card bg-dark text-white" style={{ width: '9rem', top:'20%', display:'inline-block' }}>
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
                            </Card> */}
                            <h1 className='header justify-content-center'><i>Ovie Omene</i></h1>
                            <a href="#profile" size="lg" className="downButton btn btn-primary justify-content-right" onClick={props.handleButton} style={{padding:'10px 20px', fontSize:'30px'}}>
                                <span>&#8623;</span>
                            </a>
                    </Container>
                </div>
            
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src="./assets/images/arsenal5.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
                        src='./assets/images/nigeria.jpg'
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100 h-100"
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
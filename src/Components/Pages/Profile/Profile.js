import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Profile.css";



const Profile=props=>(
    <Container className="container" style={props.style}>
        <Row>
            <Col>
                <h4><u>Ovie Omene</u></h4>
                <p><i>Web developer</i></p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4><u>About Me</u></h4>
                <section id='aboutMe'>
                    <p>I'm a developer with a background in engineering.</p>
                    <p>I love entrepreneurship and worked really hard to build a real estate investment portfolio, but I have also become incredibly passionate about coding's endless possibilities, and the opportunity to bring almost any vision to life!</p>
                    <p>I've lived on 3 continents, have been lucky enough to have lots of diverse experiences, and am looking forward to wherever my journey takes me next!</p>
                </section>
            </Col>
            <Col md={3}>
                <Image className="profilePic" src="./assets/images/profilePic.jpg" roundedCircle fluid alt="Profile Pic" />
            </Col>
            <Col>
                <h5><u>Details</u></h5>
                <ul>
                    <li>Name: <i>Ovie Omene</i></li>
                    <li>Location: <i>Atlanta, GA, USA</i></li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <p style={{'fontSize':'0.25em'}}>*Design inspired by Pascal van Gemert*</p>
            </Col>
        </Row>
    </Container>
);

export default Profile;
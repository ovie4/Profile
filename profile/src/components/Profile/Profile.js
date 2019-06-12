import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Profile.css";



const Profile=props=>(
    <Container className="container">
        <Row>
            <Col>
                <h4><u>Ovie Omene</u></h4>
                <p><i>Web developer; football fanatic</i></p>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4><u>About Me</u></h4>
                <p>Lorem ipsum sdjf qofif wqifu w[fuiw fuiwuf wifu wfifu wfiw pfiw [fwif wfi wfpwif wpfi pwpfi wfpwif wpfipwoif ] wpofi wi  pwf pwf pwif piwf  wif iwq [fpwi w[pfi wf[ pwfi fow fuih sk s f 'fj f [ wpf pwf  f</p>
            </Col>
            <Col md={3}>
                <Image className="profilePic" src="./assets/images/profilePic.jpg" roundedCircle fluid alt="Profile Pic" />
            </Col>
            <Col>
                <h5><u>Details</u></h5>
                <ul>
                    <li>Name: <i>Ovie Omene</i></li>
                    <li>Age: <i>33</i></li>
                    <li>Location: <i>Atlanta, GA, USA</i></li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <strong><i></i></strong>
            </Col>
        </Row>
    </Container>
);

export default Profile;
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./Profile.css";



const Profile=props=>(
    <Container>
        <Row className="justify-content-md-center">
            <h3><u>Ovie Omene</u></h3>
            <p><i>Web developer; football fanatic</i></p>
        </Row>
        <Row>
            <Col>
                <h5><i>About Me</i></h5>
                <p>Lorem ipsum sdjf qofif wqifu w[fuiw fuiwuf wifu wfifu wfiw pfiw [fwif wfi wfpwif wpfi pwpfi wfpwif wpfipwoif ] wpofi wi  pwf pwf pwif piwf  wif iwq [fpwi w[pfi wf[ pwfi fow fuih sk s f 'fj f [ wpf pwf  f</p>
            </Col>
            <Col md={3}>
                <Image className="profilePic" src="./assets/images/profilePic.jpg" roundedCircle fluid alt="Profile Pic" />
            </Col>
            <Col>
                <h5><i>Career so far</i></h5>
                <p>Lorem ipsum sdjf qofif wqifu w[fuiw fuiwuf wifu wfifu wfiw pfiw [fwif wfi wfpwif wpfi pwpfi wfpwif wpfipwoif ] wpofi wi  pwf pwf pwif piwf  wif iwq [fpwi w[pfi wf[ pwfi fow fuih sk s f 'fj f [ wpf pwf  f</p>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>Want to know where I've been?</p>
            </Col>
        </Row>
    </Container>
);

export default Profile;
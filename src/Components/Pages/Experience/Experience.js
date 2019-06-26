import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Experience.css";

const Experience=props=>(
    <Container className="container" style={props.style}>
        <Row>
            <Col>
                <h3><i>Experience</i></h3>
            </Col>
        </Row>
        <Tabs defaultActiveKey="edu" id="uncontrolled-tab-example">
            <Tab eventKey="edu" title="Education">
                <ul>
                    <li>
                        <Row>
                            <Col sm={4}>
                                <strong>Nov 2017-Feb 2018</strong>
                                <br />
                                <span><i>Georgia Institute of Technology</i></span>
                                <br />
                                <span><i>Full Stack Web Development</i></span>
                            </Col>
                            <Col sm={8}>
                                <p>Intensive Full Stack Web Development Bootcamp. Primary focus on the MERN stack, with additional work in algorithms that gave me the technical platform in web development</p>
                            </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col sm={4}>
                                <span><strong>Aug 2004-May 2008</strong></span>
                                <br />
                                <span><i>Cornell University</i></span>
                                <br />
                                <span><i>Chemical Engineering/Business</i></span>
                            </Col>
                            <Col sm={8}>
                                <p>Independent major in Chemical Engineering and Business. Strong emphasis on creative problem solving and logical progression</p>
                            </Col>
                        </Row>
                    </li>
                </ul>
            </Tab>
            <Tab eventKey="career" title="Career">
                <ul>
                    <li>
                        <Row>
                            <Col sm={4}>
                                <span><strong>Jun 2009-Present</strong></span>
                                <br />
                                <span><i>GomeneHoldings LLC</i></span>
                                <br />
                                <span><i>Founder/CEO</i></span>
                            </Col>
                            <Col sm={8}>
                                <p>I started investing in distressed properties to learn more about the world of business and be completely self-sufficient. Using lean management techniques to boost margins and ensure profitability, I built a portfolio with a seven figure net worth</p>
                            </Col>
                        </Row>
                    </li>
                </ul>
            </Tab>
        </Tabs>
        
    </Container>
);

export default Experience;

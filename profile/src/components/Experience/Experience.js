import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Experience.css";

const Experience=props=>(
    <Container className="container">
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
                                <p>Spent 3 months obtaining a certificate in Full Stack Web Development from Georgia Tech. Primary focus on the MERN stack, with additional work in algorithms</p>
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
                                <p>Studied Chemical Engineering at Cornell,etc etc sjhf oiau ofu soifh vsahvs vosf sadcisfajc oaf oasdj;sid oisfu fiufjlsj f</p>
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
                                <p>afsushfpoaifu oiussah oisouf osfusfivs [pufusv psu ushv pp [asuf oiv ufoaisodfi [uf iufhf oiu v[asj wiofh pv asvo [ou</p>
                            </Col>
                        </Row>
                    </li>
                </ul>
            </Tab>
        </Tabs>
        <Row>
            <Col>
                <strong><i>What I know/What I'm learning</i></strong>
            </Col>
        </Row>
    </Container>
);

export default Experience;

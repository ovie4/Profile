import React from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Experience.css";

const Experience=props=>(
    <Container>
        <Tabs defaultActiveKey="edu" id="uncontrolled-tab-example">
            <Tab eventKey="edu" title="Education">
                <ul>
                    <li>
                        <Row>
                            <Col sm={4}>
                                <span>Nov 2017-Feb 2018</span>
                                <br />
                                <span><i>Georgia Institute of Technology</i></span>
                                <br />
                                <span><i>Full Stack Web Development</i></span>
                            </Col>
                            <Col sm={8}>
                                <p>Spent 3 months obtaining a certificate in Fell Stack Web Development from Georgia Tech. Primary focus on the MERN stack, with additional work in algorithms</p>
                            </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col sm={4}>
                                <span><strong>Aug 2004-May 2009</strong></span>
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
                <p>What I know/What I'm learning</p>
            </Col>
        </Row>
    </Container>
);

export default Experience;

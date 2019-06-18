import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills=props=>(
    <Container className="container" style={props.style}>
        <Row>
            <Col>
                <ul>
                    <li>
                        <Row>
                            <Col>
                                HTML 
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' />
                            </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col>
                                CSS 
                            </Col>
                            <Col className='justify-content-sm-left'>
                                <FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' />
                            </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col>
                                Javascript 
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' />
                            </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col>
                                jQuery 
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' />
                            </Col>
                        </Row>
                    </li>
                </ul>
            </Col>
            <Col>
                <ul>
                    <li>
                        <Row>
                            <Col>
                                Leadership 
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' />
                            </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col>
                                Problem Solving 
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' />
                            </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col>
                                Management 
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' /><FontAwesomeIcon icon='star' />
                            </Col>
                        </Row>
                    </li>
                </ul>
            </Col>
        </Row>
        <Row>
            <Col>
                <strong><i>Some cool stuff I've done</i></strong>
            </Col>
        </Row>
    </Container>
)

export default Skills;
import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {flatten, times} from 'lodash';

class Skills extends Component{


    render(){

        return(
        <Container className="container">
            <Row>
                <Col>
                    <ul>
                        <li>
                            <Row>
                                <Col>
                                    HTML 
                                </Col>
                                <Col>
                                    {flatten(times(5, (index) => (<span key={index}>&#9733;</span>))).map(dot => dot)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    CSS 
                                </Col>
                                <Col>
                                    {flatten(times(5, (index) => (<span key={index}>&#9733;</span>))).map(dot => dot)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Javascript 
                                </Col>
                                <Col>
                                    {flatten(times(5, (index) => (<span key={index}>&#9733;</span>))).map(dot => dot)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    jQuery 
                                </Col>
                                <Col>
                                    {flatten(times(5, (index) => (<span key={index}>&#9733;</span>))).map(dot => dot)}
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
                                    {flatten(times(5, (index) => (<span key={index}>&#9733;</span>))).map(dot => dot)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Problem Solving 
                                </Col>
                                <Col>
                                    {flatten(times(5, (index) => (<span key={index}>&#9733;</span>))).map(dot => dot)} 
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Management 
                                </Col>
                                <Col>
                                    {flatten(times(5, (index) => (<span key={index}>&#9733;</span>))).map(dot => dot)}
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
    }
}
export default Skills;
import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {flatten, times} from 'lodash';
import "./Skills.css";

class Skills extends Component{

    setRating=(num)=>
        flatten(times(num, (index) => (<span key={index}>&#9733;</span>))).map(dot => dot)
    


    render(){

        return(
        <Container className="container">
            <Row>
                <Col>
                    <h3><i>Skills</i></h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul>
                        <li>
                            <Row>
                                <Col>
                                    HTML 
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(5)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    CSS 
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(5)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Javascript 
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(5)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    jQuery 
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(5)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    React
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(3)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Bootstrap
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(3)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    MySQL
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(3)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    mongoDB
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(4)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Java
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(2)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Object Oriented Programming
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(3)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Github
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(4)}
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
                                <Col className="ratings">
                                    {this.setRating(5)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Problem Solving 
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(5)} 
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Management 
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(5)}
                                </Col>
                            </Row>
                        </li>
                        <li>
                            <Row>
                                <Col>
                                    Creativity
                                </Col>
                                <Col className="ratings">
                                    {this.setRating(3)}
                                </Col>
                            </Row>
                        </li>
                    </ul>
                </Col>
            </Row>
            
        </Container>
        )
    }
}
export default Skills;
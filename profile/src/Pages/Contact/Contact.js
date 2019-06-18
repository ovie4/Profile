import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';


const Contact=props=>(
    <Container className="container" style={props.style}>
        <Row>
            <Col>
                <h3><u><i>Contact Me</i></u></h3>
            </Col>
        </Row>
        <Row>
            <Col sm={8}>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formFirstNAme">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formLastName">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control placeholder="Surname" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder="email" />
                    </Form.Group>

                    <Form.Group controlId="formTextArea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder='Hi Ovie...' />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Col>
            <Col sm={4}>
                <Row>
                    <Col>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ovie4">
                        <Figure>
                            <Figure.Image
                                width={100}
                                height={100}
                                alt="Github logo"
                                src="./assets/images/git.png"
                            />
                            <Figure.Caption>
                                Github
                            </Figure.Caption>
                        </Figure>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ovie4/">
                        <Figure>
                            <Figure.Image
                                width={100}
                                height={100}
                                alt="Linkedin logo"
                                src="./assets/images/linkedin.png"
                            />
                            <Figure.Caption>
                                Linkedin
                            </Figure.Caption>
                        </Figure>
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
        
    </Container>
);

export default Contact;
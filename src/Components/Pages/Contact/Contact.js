import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import * as emailjs from 'emailjs-com';
import "./Contact.css";

class Contact extends Component{
    
    state={
       firstName:'',
       surname:'',
       email:'',
       msg:'' 
    };

    handleInputChange=event=>{
        //update values
        const{name, value}=event.target;
        this.setState({
            [name]:value
        })
    };
    
    handleSubmit=event=>{
        //email myself all form info
        event.preventDefault();
        let templateParams={
            firstName:this.state.firstName,
            surname:this.state.surname,
            email:this.state.email,
            msg:this.state.msg
        };
        console.log(templateParams);
        emailjs.send('gmail_personal', 'new_site_comment', templateParams, 'user_qIx7weqzlsQ5IPD09yF9D')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Thank you for your message...expect a response soon!!")
             }, (err) => {
                console.log('FAILED...', err);
                alert("Looks like there is a problem with the service...please try again later")
             });

        //reset state
        this.setState({
            firstName:'',
            surname:'',
            email:'',
            msg:'' 
        });
    };


    render(){
        return (
            <Container className="container">
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
                                <Form.Control 
                                    name='firstName' 
                                    placeholder="First Name" 
                                    value={this.state.firstName} 
                                    onChange={this.handleInputChange}
                                />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formLastName">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control 
                                    name='surname' 
                                    placeholder="Surname" 
                                    value={this.state.surname} 
                                    onChange={this.handleInputChange}
                                />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                    name='email' 
                                    placeholder="email" 
                                    type='email'  
                                    value={this.state.email} 
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group controlId="formTextArea">
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    name='msg' 
                                    as='textarea' 
                                    rows="3" 
                                    placeholder="Hi Ovie..." 
                                    value={this.state.msg} 
                                    onChange={this.handleInputChange}
                                />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
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
        )

    }
}
export default Contact;
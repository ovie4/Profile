import React,{Component} from 'react';
import './App.css';
import {Row,Col,Nav,Container} from 'react-bootstrap';
import Cover from "./Pages/Cover";
import Profile from "./Pages/Profile";
import Experience from "./Pages/Experience";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Skills from "./Pages/Skills";
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

library.add(faStar,faCoffee);



class App extends Component{

  state={
    style:{
      display:"none"
    }
  }
  

  handleButton=event=>{
    this.setState({style:{display:'block'}});
  };


  render(){
    return (
      <div className="App">
            <Cover 
              handleButton={this.handleButton}>
            </Cover>
        <Container style={this.state.style}>
          <Row>
            <Col sm={10}>
              <Row>
                <Col>
                  <Profile></Profile>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Experience></Experience>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Skills></Skills>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Projects></Projects>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Contact></Contact>
                </Col>
              </Row>
            </Col>
            <Col sm={2}>
              <Nav defaultActiveKey="/home" className="flex-column justify-content-end sideNav">
                <Nav.Link href="/home">Active</Nav.Link>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                <Nav.Link eventKey="disabled">
                  Disabled
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

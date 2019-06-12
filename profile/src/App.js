import React from 'react';
import './App.css';
import {StickyContainer, Sticky} from 'react-sticky';
import {Row,Col,Nav,Container} from 'react-bootstrap';
import Cover from "./components/Cover";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Skills from "./components/Skills";
import Projects from './components/Projects';
import Contact from './components/Contact';

library.add(faStar,faCoffee);

const sidebarDef=()=>(
    <StickyContainer style={{zIndex: 2}}>
      <Sticky>{()=>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Profile</Nav.Link>
          <Nav.Link eventKey="link-1">Experience</Nav.Link>
          <Nav.Link eventKey="link-2">Skills</Nav.Link>
        </Nav>
      }
      </Sticky>
    </StickyContainer>
);
const sidebarCall=sidebarDef();

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <Cover></Cover>
        </Col>
      </Row>
      <Container>
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
            <Nav defaultActiveKey="/home" className="flex-column justify-content-end sideNav" dark='true'>
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

export default App;

import React,{Component, createRef} from 'react';
import './App.css';
import {Row,Col,Jumbotron} from 'react-bootstrap';
import { BrowserRouter as Router} from "react-router-dom";
import Cover from "./Components/Pages/Cover";
import Profile from "./Components/Pages/Profile";
import Experience from "./Components/Pages/Experience";
import Skills from "./Components/Pages/Skills";
import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import SideNav from './Components/SideNav';




class App extends Component{

  state={
    style:{
      display:"none",
    }
    
  }
  profileComponent = createRef();

  handleButton=()=>{
    this.setState({style:{display:'block'}});
    //scroll to profile
    console.log(this.profileComponent.current);
  //   this.profileComponent.current.scrollIntoView({ 
  //     behavior: "smooth" 
  //  });
//    window.scrollTop(
//     this.profileComponent.current.offsetHeight().top - window.offset().top + window.scrollTop()
// );
// window.scrollByPages(1);
  }



  render(){
    return (
      <div className="App">
        <Cover 
          handleButton={this.handleButton}>
        </Cover>
        <Router>
          <Jumbotron style={this.state.style}>
            <Row className='allPages'>
              <Col sm={10}>
                <Row id='profile' >
                  <Col>
                    <div ref={this.profileComponent}>
                    <Profile></Profile>
                    </div>
                  </Col>
                </Row>
                <Row id='experience'>
                  <Col>
                    <Experience></Experience>
                  </Col>
                </Row>
                <Row id='skills'>
                  <Col>
                    <Skills></Skills>
                  </Col>
                </Row>
                <Row id='projects'>
                  <Col>
                    <Projects></Projects>
                  </Col>
                </Row>
                <Row id='contact'>
                  <Col>
                    <Contact></Contact>
                  </Col>
                </Row>
              </Col>
              <Col sm={2}>
                <SideNav></SideNav>
                
              </Col>
            </Row>
              
          </Jumbotron>
        </Router>
      </div>
    );
  }
}

export default App;

import React from 'react';
import {HashLink as Link } from 'react-router-hash-link';
import Nav from 'react-bootstrap/Nav';

const SideNav=()=>
        <Nav justify navbar={true} className="flex-column justify-content-center sideNav" style={{backgroundColor:'grey'}}>
        <Nav.Item className={window.location.pathname === "/profile" ? "active" : ""}>
            <Link style={{color:'white'}} to="/#profile">Profile</Link>
        </Nav.Item><br />
        <Nav.Item className={window.location.pathname === "/experience" ? "active" : ""}>
            <Link style={{color:'white'}} to="/#experience">Experience</Link>
        </Nav.Item><br />
        <Nav.Item className={window.location.pathname === "/skills" ? "active" : ""}>
            <Link style={{color:'white'}} to="/#skills">Skills</Link>
        </Nav.Item><br />
        <Nav.Item className={window.location.pathname === "/projects" ? "active" : ""}>
            <Link style={{color:'white'}} to="/#projects">Projects</Link>
        </Nav.Item><br />
        <Nav.Item className={window.location.pathname === "/contact" ? "active" : ""}>
            <Link style={{color:'white'}} to="/#contact">Contact</Link>
        </Nav.Item>
        </Nav>
    ;

export default SideNav;
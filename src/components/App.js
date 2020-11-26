import React, { useEffect } from 'react';
import './Navbar/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Banner from './Banner/Banner';
import './base.css'
import {
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller
  } from 'react-scroll';
  import Instructions from './Instructions/Instructions';
  import FAQ from './FAQ/FAQ';
  import Team from './Team/Team';
  import Glossary from './Glossary/Glosssary';

const App = () => {
    const scrollToDiv = name => {
    scroller.scrollTo(name, {
        duration: 1500,
        smooth: 'easeInOutQuint'
        // offset: -70
    });
    };
  return (
    <div>
      <div className="navbar">
        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">
            <Nav.Link href="#" onClick={() => scrollToDiv('titleSection')}>
              <picture>
               
                <img className="talofa_logo" src="./logo.png" />
              </picture>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#" onClick={() => scrollToDiv('aboutSection')}>
                About
              </Nav.Link>
              <Nav.Link href="#" onClick={() => scrollToDiv('instructionSection')}>
                How to Play
              </Nav.Link>
              <Nav.Link href="#" onClick={() => scrollToDiv('faqSection')}>
                FAQ
              </Nav.Link>
              <Nav.Link href="#" onClick={() => scrollToDiv('glossarySection')}>
                Glossary
              </Nav.Link>
              <Nav.Link href="#" onClick={() => scrollToDiv('teamSection')}>
                Team
              </Nav.Link>
              <Nav.Link href="#" onClick={() => scrollToDiv('glossarySection')}>
                Online
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    <div className = "aboutSection"><Banner/></div>
    
    <div className = "instructionSection">    <Instructions/></div>
    <div className = "faqSection"><FAQ/></div>
    <div className = "teamSection"><Team/></div>
    <div className = "glossarySection">    <Glossary/> </div>
    </div>
  );
};


export default App;

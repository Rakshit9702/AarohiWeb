// src/App.js
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './App.css';
import Header from "./components/Header"
import Contacts from './components/Contacts';
function App() {

  return (
    <div className="background">
      {/* Navbar */}
      {/* <nav className="navbar">
        <div className="container">
        
          <a href="#" className="navbar-brand" onClick={() => scroll.scrollToTop()}>
            <div className="aarohilogo">aarohi</div>
          </a>
          <ul className="nav-links">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="responsibilities" smooth={true} duration={500}>
              Responsibilities
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
      <Header />


      {/* Sections */}
      <div id="home" className="section">
        <h1>Home</h1>
        {/* <p>Welcome to our website!</p> */}
        
      </div>

      <div id="about" className="section">
        <h1>About</h1>
        {/* <p>We are a company dedicated to providing the best responsibilities.</p> */}
      </div>

      <div id="responsibilities" className="section">
        <h1>Responsibilities</h1>
        {/* <p>We offer a wide range of responsibilities to meet your needs.</p> */}
      </div>

      <div id="contact" className="section">
       
        {/* <p>Get in touch with us through our contact page.</p> */}
        
      </div>
      
    </div>
  );
  
}

export default App;

import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../App.css';
import "../bootstrap-5.3.3/bootstrap-5.3.3/dist/css/bootstrap.min.css"
import "../bootstrap-5.3.3/bootstrap-5.3.3/dist/js/bootstrap.bundle.min"

function Header(){
    return(
        <div className="navbar-container">
        <nav  className="navbar navbar-dark fixed-top bg-dark navbar-expand-lg ">
            <div className="container-fluid">
                
                <Link className="navbar-brand logo" to="home">
                    <div className="aarohilogo"></div>
                </Link>

                <button id="navbar-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav nav-links  mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" to="home" smooth={true} duration={500}>
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="about" smooth={true} duration={500}>
                        ABOUT
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="responsibilities" smooth={true} duration={500}>
                      RESPONSIBILITIES
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="contact" smooth={true} duration={500}>
                        CONTACTS
                      </Link>
                    </li>
                     
                    
                    </ul>
                </div>
            </div>
        </nav>
      </div>
      
    );
}


export default Header;
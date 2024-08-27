import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../App.css';
import "../bootstrap-5.3.3/bootstrap-5.3.3/dist/css/bootstrap.min.css"
import "../bootstrap-5.3.3/bootstrap-5.3.3/dist/js/bootstrap.bundle.min"
import "./Contacts.css"

function Contacts(){
    return(
        <footer className="contacts-background">
        <div className="contacts-logo">
            <img src="images/logo.png" alt="axis logo" />
            <div className="contacts-info">AXIS is the annual technical festival of Visvesvaraya National Institute of Technology (VNIT), Nagpur. It's one of the largest technical fests in central India, attracting students from various engineering colleges across the country. The event typically features a wide range of activities, including technical competitions, workshops, guest lectures, exhibitions, and paper presentations.</div>
        </div>
        <div className="contacts-writing">
            <div className="quick-links">
                <div className="quick-links-heading">QUICK LINKS</div>
                <div className="quick-links-content">
                    <div><a href="#home-background">Home</a></div>
                    <div><a href="#about-background">About</a></div>
                    <div><a href="#events-background">Events</a></div>
                    <div><a href="#teams-background">Teams</a></div>
                    <div><a href="#contacts-background">Conacts</a></div>
                </div>
                
            </div>

            <div className="reach-out">
                <div className="reach-out-heading">REACH OUT</div>
                <div className="reach-out-address"> Visvesvaraya National Institute of Technology Nagpur
                    South Ambazari Road, Nagpur, Maharashtra.</div>
            </div>

            <div className="contact">
                <div className="contact-heading">CONTACT</div>
                <div className="contact-numbers">
                    Rajashree Patel: +91 8767122179<br/><br/>
                    Yatharth Chopra: +91 7021797076<br/><br/>
                    Ayush Charde: +91 9022887167<br/><br/>
                    Aditi Dhongade: +91 8010214360<br/><br/>
                </div>
            </div>

            <div className="follow-us">
                <div className="follow-us-heading">FOLLOW US</div>
                <div className="social-icons">
                <Link className="nav-link" to="https://instagram.com" smooth={true} duration={500}>
                <img src="./images/instagram (1).png" alt="Instagram"/>
                </Link>
                <Link className="nav-link" to="https://facebook.com" smooth={true} duration={500}>
                <img src="./images/facebook.png" alt="Facebook"/>
                </Link>
                <Link className="nav-link" to="https://youtube.com" smooth={true} duration={500}>
                <img src="./images/youtube (1).png" alt="YouTube"/>
                </Link>
                    <a href="" target="_blank"></a>
                    <a href="" target="_blank"></a>
                    <a href="" target="_blank"></a>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Contacts;
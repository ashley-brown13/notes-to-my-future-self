import React from 'react';
import { NavLink } from 'react-router-dom';
import gitHub from "../../images/github.png";
import gmail from "../../images/gmail.png";
import linkedIn from "../../images/linkedin.png";
import './Footer.css'


const Footer = () => {
    return (
        <div className="footer">
            <h3 className="contact-me">&copy; 2021 Ashley Brown</h3>
            <div className="links">
                <a href="https://www.linkedin.com/in/ashleybrown121389/" target="_blank"><img src={linkedIn} alt="linkedIn icon" /></a>
                <a href="mailto:ashleybrown101789@gmail.com" target="_blank"><img src={gmail} alt="gmail icon" /></a>
                <a href="https://github.com/ashley-brown13" target="_blank"><img src={gitHub} alt="github icon" /></a>
            </div>
            <div>Icons made by Freepik from www.flaticon.com</div>
        </div>
    )
}

export default Footer
